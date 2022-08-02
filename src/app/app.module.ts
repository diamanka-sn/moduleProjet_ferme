import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComposantsModule } from './composants/composants.module';
import { PagesModule } from './pages/pages.module';
// import { PagesComponent } from './pages/pages.component';
@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent
    // PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   // ComposantsModule,
    PagesModule

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
