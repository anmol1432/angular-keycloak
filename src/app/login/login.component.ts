import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  signInForm =this.formBuilder.group({
    firstName: '',
    lastName: '',
  }); 

  onSubmit(e: any): void {
    // e.stopPropagation();
    e.preventDefault();
    console.log('okay');
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
