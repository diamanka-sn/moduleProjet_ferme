import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-mes-achats',
  templateUrl: './mes-achats.component.html',
  styleUrls: ['./mes-achats.component.scss']
})
export class MesAchatsComponent implements OnInit {
  lait: any
  h: any
  error: any;
  b:any
  isLoading: boolean = true
  
  constructor(private comm: CommandeService, private routes: Router) { }

  ngOnInit(): void {
    this.allCommande()

    this.comm.getHistorique().subscribe(res => {
      this.h = res[0]
    })
    this.comm.getHistoriqueBovin().subscribe(res=>{
      this.b = res[0]
      this.isLoading = false

    })
  }

  supprimer(lait: any) {
    console.log(lait.id)
    this.comm.supprimer(lait.id).subscribe(res => {
      this.error = res
      if (!this.error.err) {
        var result = confirm("Voulez vous supprimer cette commande?");

        if (result) {
          this.allCommande()
        }
      }
    })
  }

  allCommande() {
    this.comm.getEnCours().subscribe(res => {
      this.lait = res[0]
    })
  }

}
