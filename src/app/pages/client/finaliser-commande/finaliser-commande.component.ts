import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { InformationPersonnelleService } from 'src/app/services/information-personnelle.service';

@Component({
  selector: 'app-finaliser-commande',
  templateUrl: './finaliser-commande.component.html',
  styleUrls: ['./finaliser-commande.component.scss']
})
export class FinaliserCommandeComponent implements OnInit {
  utilisateur: any
  panier: any
  taille: number = 0
  somme: number = 0
  j: number = 0
  error:any
  form = new FormGroup({
    paiement: new FormControl('', Validators.required)
  })
  constructor(private servinfo: InformationPersonnelleService, private routes: Router,private com: CommandeService) { }
  isLoading: boolean = true
  ngOnInit(): void {
    this.servinfo.subinfo.subscribe(data => {
      this.utilisateur = data
    })
    this.servinfo.getInfo()
    this.com.getPanier().subscribe(res => {
      this.panier = res[0]
      this.taille = res[0].length
      for (let i = 0; i < this.panier.length; i++) {
        this.somme += parseInt(this.panier[i].prix)
      }
      console.log(this.somme)
      this.isLoading = false
    })
  }
  submit() {
    var b = parseInt(this.form.value.paiement)
    for (let i = 0; i < this.panier.length; i++) {
      console.log(this.panier[i].id, this.panier[i].nom)
      let donnees = {
        paiement: b,
        idBovin: this.panier[i].id,
        prix:this.panier[i].prix
      }
      console.log(donnees)
      this.com.validerCommande(donnees).subscribe(res=>{
        this.error = res
        if(!this.error.err){
          this.routes.navigate(['/client/historique'])
        } else {
         this.j = 1
        }
      })

    }

  }
}
