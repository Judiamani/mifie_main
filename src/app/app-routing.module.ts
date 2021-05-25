import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MonchampComponent } from './monchamp/monchamp.component';


const routes: Routes = [
  {path:'', redirectTo: 'Accueil', pathMatch: 'full'},
  {path:'Accueil', component: AccueilComponent},
  {path:'MonChamps', component: MonchampComponent}
]
  
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
