import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
// import { ComposantsModule } from '../composants/composants.module';

import { HeaderComponent } from '../composants/header/header.component';
import { FooterComponent } from '../composants/footer/footer.component';
import { PagesComponent } from './pages.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppRoutingModule } from '../app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
@NgModule({
  declarations: [
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    InscriptionComponent,
    ConnexionComponent,
    PanierComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
