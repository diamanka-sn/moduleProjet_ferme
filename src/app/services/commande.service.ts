import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config, nom } from 'src/model/config';
import { EnvoieService } from './envoie.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private routes: Router, private http: HttpClient, private bd: EnvoieService) { }
  passerUneCommande(donnees: any) {
    const email = nom().email
    return this.http.post(`${config.apiUrl}`+'/commandes/'+email, donnees);
  }

  ajouterPanier(donnees: any) {
    const email = nom().email
    return this.http.post(`${config.apiUrl}`+'/commandes/ajouterpanier/'+email, donnees);
  }
  validerCommande(donnees: any) {
    const email = nom().email
    return this.http.post(`${config.apiUrl}`+'/commandes/valider/'+email, donnees);
  }
  getPanier() {
    const email = nom().email
    return this.http.get<any[]>(`${config.apiUrl}`+'/commandes/panier/'+email);
  }
  getHistoriqueBovin() {
    const email = nom().email
    return this.http.get<any[]>(`${config.apiUrl}`+'/commandes/b/'+email);
  }
  getEnCours() {
    const email = nom().email
    return this.http.get<any[]>(`${config.apiUrl}`+'/commandes/h/'+email);
  }
  getHistorique() {
    const email = nom().email
    return this.http.get<any[]>(`${config.apiUrl}`+'/commandes/all/'+email);
  }

  supprimer(id:number) {
    const email = nom().email
    return this.http.delete(`${config.apiUrl}`+'/commandes/'+email+"/"+id);
  }

  supprimerPanier(id:number) {
    const email = nom().email
    return this.http.delete(`${config.apiUrl}`+'/commandes/supprimer/'+email+"/"+id);
  }
}
