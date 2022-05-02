import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// ----------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store'
import { counterReducer } from "../store/reducers/counter.reducer";
import { bookReducer } from "../store/reducers/book.reducer";
import { CounterComponent } from './counter/counter.component';

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
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer , bookos:bookReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  