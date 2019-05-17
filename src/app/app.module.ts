import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChevalierAjoutComponent } from './chevalier-ajout/chevalier-ajout.component';
import { ChevalierDetailComponent } from './chevalier-detail/chevalier-detail.component';
import { ChevaliersComponent } from './chevaliers/chevaliers.component';
import { HttpClientModule } from '@angular/common/http';
import { ChevalierModifierComponent } from './chevalier-modifier/chevalier-modifier.component';


@NgModule({
  declarations: [
    AppComponent,
    ChevaliersComponent,
    ChevalierAjoutComponent,
    ChevalierDetailComponent,
    ChevalierModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
