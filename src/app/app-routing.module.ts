import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImcComponent } from './imc/imc.component';

const routes: Routes = [
  {path:"imc", component: ImcComponent},
  {path:"home", component: HomeComponent},
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
