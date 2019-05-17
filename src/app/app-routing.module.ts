import { ChevalierDetailComponent } from './chevalier-detail/chevalier-detail.component';
import { ChevalierAjoutComponent } from './chevalier-ajout/chevalier-ajout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChevaliersComponent } from './chevaliers/chevaliers.component';

const routes: Routes = [
  { path : '', redirectTo : 'kaamelott', pathMatch : 'full' },
  { path : 'kaamelott', component : ChevaliersComponent },
  { path : 'ajout', component : ChevalierAjoutComponent },
  { path : 'kaamelott/:id', component : ChevalierDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
