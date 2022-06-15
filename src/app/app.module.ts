import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// -----------------Components------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// -------------------redux------------------------------------
import { StoreModule } from '@ngrx/store'
import { counterReducer } from "../store/reducers/counter.reducer";
import { bookReducer } from "../store/reducers/book.reducer";
import { CounterComponent } from './counter/counter.component';
// ---------------------Keycloak--------------------------
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './utility/app.init';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer , bookos:bookReducer})
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
  