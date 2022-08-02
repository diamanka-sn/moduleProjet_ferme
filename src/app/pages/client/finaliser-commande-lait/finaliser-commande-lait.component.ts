import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationPersonnelleService } from 'src/app/services/information-personnelle.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommandeService } from 'src/app/services/commande.service';
@Component({
  selector: 'app-finaliser-commande-lait',
  templateUrl: './finaliser-commande-lait.component.html',
  styleUrls: ['./finaliser-commande-lait.component.scss']
})
export class FinaliserCommandeLaitComponent implements OnInit {
  utilisateur: any
  quantite!: number
  error:any
  j:number = 0
  form = new FormGroup({
    paiement: new FormControl('', Validators.required)
  })

  constructor(private servinfo: InformationPersonnelleService,  private routes: Router,private router: ActivatedRoute, private com: CommandeService) { }
  get f() { return this.form.controls }
  ngOnInit(): void {
    this.quantite = this.router.snapshot.params['quantite']
    this.servinfo.subinfo.subscribe(data => {
      this.utilisateur = data
    })
    this.servinfo.getInfo()
  }
  submit() {
    //var a = parseInt(this.quantite)
    var b = parseInt(this.form.value.paiement)
    const donnees = {
      quantite: this.quantite,
      paiement: b
    }
    this.com.passerUneCommande(donnees).subscribe(res => {
      this.error = res
      if(!this.error.err){
        this.routes.navigate(['/client/historique'])
      } else {
       this.j = 1
      }
    })
  }
}
