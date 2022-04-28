import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm = this.formBuilder.group({
    userName: '',
    password: '',
  });
  isAuthent: boolean = false;
  errorMsg: string = 'Please enter credentials !';

  onSubmit(e: any): void {
    e.preventDefault();
    console.log('--------->', this.signInForm);
    if (
      this.signInForm.value.userName == 'Anm1234' &&
      this.signInForm.value.password == '1234'
    ) {
      console.log('login successful');
      this.isAuthent = false;
      this.router.navigate(['dashboard']);
    } else {
      console.log('Login again failed');
      this.isAuthent = true;
      this.signInForm.reset();
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {}
}
