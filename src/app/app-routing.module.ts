import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';
import { AddressComponent } from './address/address.component';


const routes: Routes = [
      { path:'',redirectTo:'/onboard',pathMatch: 'full'},
      {path:'onboard', component: OnboardComponent},
      {path:'address', component: AddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
