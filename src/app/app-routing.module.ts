import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { PagesComponent } from './pages/pages.component';
import { PanierComponent } from './pages/panier/panier.component';
import { ClientComponent } from './pages/client/client.component';
const routes: Routes = [

  {
    path: '', component: PagesComponent, children: [
      {path:'',component:AccueilComponent},
      { path: 'inscription', component: InscriptionComponent },
      { path: 'panier', component: PanierComponent },
    ]
  },  {
    path: 'client', component: ClientComponent, children: [
      {path:'',component:ClientComponent},
     
    ]
  },
  { path: 'connexion', component: ConnexionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
