import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'src/model/config';
import { traite, vendu } from 'src/model/lait';

@Injectable({
  providedIn: 'root'
})
export class BovinsService {

  constructor(private http: HttpClient) { }
  getAllBovins() {
    return this.http.get<any[]>(`${config.apiUrl}/bovin`)
  }
  getAllVaches() {
    return this.http.get<any[]>(`${config.apiUrl}/bovin/vaches`)
  }

  getAllTaureau() {
    return this.http.get<any[]>(`${config.apiUrl}/bovin/taureaux`)
  }

  getTraite() {
    return this.http.get<any[]>(`${config.apiUrl}/bovin/traite`)
  } 
  
  getLaitVendu() {
    return this.http.get<any[]>(`${config.apiUrl}/bovin/vendu`)
  }
}
