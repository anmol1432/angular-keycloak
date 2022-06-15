import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DshboardService } from './dashboard.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [DshboardService],
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private readonly keycloak: KeycloakService
  ) {}
  billForm = this.formBuilder.group({
    amount: '',
    describe: '',
  });
  bills: Array<{ id: string; describe: string; amount: number }> = [];
  public isLogueado = false;
  public perfilUsuario: KeycloakProfile | null = null;

  public async ngOnInit() {
    this.isLogueado = await this.keycloak.isLoggedIn();
    type rolesUsuarios = Array<{ id: number; text: string }>;

    if (this.isLogueado) {
      this.perfilUsuario = await this.keycloak.loadUserProfile();
    }
  }

  // public iniciarSesion() {
  //   this.keycloak.login();
   
  // }

  public cerrarSesion() {
    // debugger
    // console.log(this.keycloak.getToken().then((res)=>{
    //   console.log(res)
    //   localStorage.setItem("KeyCloakAccessToken",res)
    // }))
    this.keycloak.logout();  
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for (let i = 0; i < parts; i++) {
      const S4 = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  addBill(e: any): void {
    e.preventDefault();
    this.bills.push({ ...this.billForm.value, id: this.getUniqueId(4) });
    const val = this.billForm.value;
    console.log('ddadasd', val);
    this.billForm.reset();
  // let  config = {
  //     "realm": "bms",
  //     "auth-server-url": "http://172.17.98.65:8080/auth/",
  //     "ssl-required": "external",
  //     "resource": "bms",
  //     "public-client": true,
  //     "confidential-port": 0
  //   }
    fetch('http://localhost:3001/save/bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' +localStorage.getItem("KeyCloakAccessToken1.0"),
      },
      body: JSON.stringify({ amt: val.amount, des: val.describe }),
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
  total = 0;
  getTotal(): any {
    this.total = 0;
    this.bills.map((item): number => {
      this.total = this.total + item.amount;
      return this.total;
    });
    return this.total;
  }
}
