import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
// import { ComposantsModule } from '../composants/composants.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../composants/header/header.component';
import { FooterComponent } from '../composants/footer/footer.component';
import { PagesComponent } from './pages.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AppRoutingModule } from '../app-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { PanierComponent } from './panier/panier.component';
import { ClientComponent } from './client/client.component';
import { HeaderClientComponent } from './client/header-client/header-client.component';
import { CompteComponent } from './client/compte/compte.component';
import { MesAchatsComponent } from './client/mes-achats/mes-achats.component';
import { FinaliserCommandeComponent } from './client/finaliser-commande/finaliser-commande.component';
import { FinaliserCommandeLaitComponent } from './client/finaliser-commande-lait/finaliser-commande-lait.component';

import { CategoriesComponent } from './categories/categories.component';
@NgModule({
  declarations: [
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    PagesComponent,
    InscriptionComponent,
    ConnexionComponent,
    PanierComponent,
    ClientComponent,
    HeaderClientComponent,
    CompteComponent,
    MesAchatsComponent,
    FinaliserCommandeComponent,
    FinaliserCommandeLaitComponent,
   
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
