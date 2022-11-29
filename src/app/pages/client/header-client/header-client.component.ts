import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { config, getRole, getToken, nom, seDeconnecter } from 'src/model/config';
import { InformationPersonnelleService } from 'src/app/services/information-personnelle.service';
import { EnvoieService } from 'src/app/services/envoie.service';
import { HttpClient } from '@angular/common/http';
import { GetTokenService } from 'src/app/services/get-token.service';
import { CommandeService } from 'src/app/services/commande.service';
@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {
  public data: any;
  isAuth: boolean = true;
  utilisateur!: any
  email!: string
  role!: any
  panier: any
  taille: number = 0
  constructor(private http: HttpClient,
    private bd: EnvoieService,
    private servinfo: InformationPersonnelleService,
    private token: GetTokenService, private route: Router, private com: CommandeService) { }

  ngOnInit(): void {
    this.token.subToken.subscribe(token => {
      this.isAuth = token
      console.log(token)
    })
    this.token.getTken()
    this.servinfo.getInfo()
    //console.log(this.servinfo.getInfo())
    // this.getMedicament()
    // this.getCategorie()
    this.role = getRole()
    this.utilisateur = this.servinfo.utilisateur
    // console.log(this.utilisateur)

    this.getTaillePanier()
  }
  getTaillePanier() {
    this.com.getPanier().subscribe(res => {
      //this.panier = res[0]
      this.taille = res[0].length
      console.log(this.taille)
      //  console.log(this.panier)
      // this.route.navigate(['/panier'])
    })
  }
  deconnexion() {
    var result = confirm("Voulez-vous vous deconnecté ?");
    if (result) {
      this.token.supprimerToken()
    }
  }

  voirpanier() {
    if (!this.utilisateur) {
      this.route.navigate(['/connexion'])
    } else {
      this.com.getPanier().subscribe(res => {
        this.panier = res[0]
        this.taille = res[0].length
        console.log(this.taille)
        // console.log(this.panier)
        this.route.navigate(['/panier'])
      })
    }
  }
}
