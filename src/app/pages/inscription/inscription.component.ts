import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validationTelephone } from '../.././../model/config';
import { GetTokenService } from 'src/app/services/get-token.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { InformationPersonnelleService } from 'src/app/services/information-personnelle.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  //formGroup!: FormGroup;
  erreurTelephone: boolean = false
  erreurEmail: boolean = false
  submitErr: boolean = false
  formGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    prenom: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    adresse: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    telephone: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(9),
    Validators.maxLength(12), validationTelephone]),
    email: new FormControl('', [Validators.required, Validators.email]),
    motDePasse: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    configmotDePasse: new FormControl('', [Validators.required, Validators.maxLength(100), (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value) {
        if (c.value !== this.formGroup.value['motDePasse']) {
          return { 'errorMp': true }
        }
      }
      return null
    }]),
  })
  constructor(private form: FormBuilder,
    private servicaut: AuthentificationService,
    private servicInfo: InformationPersonnelleService,
    private serveToken: GetTokenService,
    private routes: Router) { }

  ngOnInit(): void {
  }

  initForm() {
    this.formGroup
  }

  get f() { return this.formGroup.controls; }
  submit() {
    this.submitErr = true

    if (this.formGroup.valid) {
      this.submitErr = false
      const nom = this.formGroup.value['nom']
      const prenom = this.formGroup.value['prenom']
      const adresse = this.formGroup.value['adresse']
      const telephone = this.formGroup.value['telephone']
      const email = this.formGroup.value['email']
      const motDePasse = this.formGroup.value['motDePasse']
      const donnees = {
        nom: nom,
        email: email,
        prenom: prenom,
        adresse: adresse,
        telephone: telephone,
        password: motDePasse,
        profile: "client"
      }
      this.servicaut.inscription(donnees).subscribe((user: any) => {
        console.log(user.utilisateur.idUser)
        if (user.err) {
          if (user.errorTelephone) {
            this.erreurTelephone = true
          }
          else {
            this.erreurTelephone = false
          }
          if (user.errorEmail) {
            this.erreurEmail = true
          }
          else {
            this.erreurEmail = false
          }
          return

        } else {
          
          this.servicInfo.addUser(user)
          this.serveToken.addToken()
         this.routes.navigate([`/client`])

        }
      })
       
    }
  }
}
