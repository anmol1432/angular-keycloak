import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages imports
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CounterComponent } from "./counter/counter.component";
import { AuthGuard } from './utility/app.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent,canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuard]},
  {path: 'counter', component: CounterComponent,canActivate: [AuthGuard]},
  {path: '**',redirectTo:'login',},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
