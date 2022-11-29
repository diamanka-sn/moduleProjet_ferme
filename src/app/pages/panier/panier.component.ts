import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier: any
  taille: number = 0
  somme: number = 0
  isLoading: boolean = true
  error: any;

  constructor(private com: CommandeService) { }

  ngOnInit(): void {
    this.getPanier()
  }
  getPanier() {
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
  supprimer(b: any) {
    this.com.supprimerPanier(b.id).subscribe(res => {
      this.error = res
      if (!this.error.err) {
        var result = confirm("Voulez vous supprimer cette commande?");
        if (result) {
          this.getPanier()
        }
      }
    })
  }
}
