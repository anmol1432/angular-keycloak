import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages imports
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CounterComponent } from "./counter/counter.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'counter', component: CounterComponent},
  {path: '**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
