import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages imports
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
