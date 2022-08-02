import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BovinsService } from 'src/app/services/bovins.service';
import { CommandeService } from 'src/app/services/commande.service';
import { GetTokenService } from 'src/app/services/get-token.service';
import { InformationPersonnelleService } from 'src/app/services/information-personnelle.service';
import { getRole } from 'src/model/config';
import { traite } from 'src/model/lait';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  bovins: any
  traite: any
  vendu: any
  j: number = 1;
  i: number = 0;
  s: number = 0
  v: number = 0
  role!: any
  // isAuth: boolean = false;

  utilisateur!: any

  submitErr: boolean = false
  formGroup = new FormGroup({
    quantite: new FormControl('', [Validators.required, Validators.maxLength(100), (c: AbstractControl): { [key: string]: boolean } | null => {
      const v = this.s - this.v
      console.log(v)
      if (c.value) {
        if (c.value > v) {
          return { 'errorMp': true }
        }
      }
      return null
    }]),
  })

  constructor(private token: GetTokenService, private bovin: BovinsService, private servinfo: InformationPersonnelleService, private routes: Router, private com: CommandeService) { }
  isLoading: boolean = true

  ngOnInit(): void {
    this.formGroup
    this.getAllbovins()

    this.token.getTken()
    this.servinfo.getInfo()
    //console.log(this.servinfo.getInfo())
    // this.getMedicament()
    // this.getCategorie()
    this.role = getRole()
    this.utilisateur = this.servinfo.utilisateur

    this.isLoading = false
    this.bovin.getTraite().subscribe(res => {
      this.traite = res[0]
      if (this.traite.length == 0) {
        this.s = 0
      } else {
        for (let i = 0; i < this.traite.length; i++) {
          this.s += parseInt(this.traite[i].traite)
        }
      }
      console.log(this.s)
    })

    this.bovin.getLaitVendu().subscribe(res => {
      this.vendu = res[0]
      if (this.vendu.length == 0) {
        this.v = 0
      } else {
        for (let i = 0; i < this.vendu.length; i++) {
          this.v += parseInt(this.vendu[i].capacite)
        }
      }
    })
  }
  get f() { return this.formGroup.controls; }
  submit() {

    this.submitErr = true
    if (!this.utilisateur) {
      this.routes.navigate(['/connexion'])
    } else {
      if (this.formGroup.valid) {
        this.submitErr = false
        const quantite = parseInt(this.formGroup.value['quantite'])
        var result = confirm("Voulez-vous commander"+ quantite +" de litres ?");
        if (result) {
          console.log(quantite)
          this.routes.navigate(['/client/finaliser-lait/' + quantite])
        }
      }

    }

  }
  getAllbovins() {
    this.bovin.getAllBovins().subscribe(res => {
      this.bovins = res[0]
      //  this.isLoading = false
    })
  }
  ajouterPanier(m: any) {
    console.log(this.utilisateur)
    if (!this.utilisateur) {
      this.routes.navigate(['/connexion'])
    } else {
      var result = confirm("Voulez-vous ajouter ce bovin au panier ?");
      if (result) {
        const donnees = {
          idBovin: m.idBovin,
        }
        this.com.ajouterPanier(donnees).subscribe(res => {
          this.getAllbovins()
        })
      }
    }
  }
}
