import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  billForm = this.formBuilder.group({
    amount: '',
    describe: '',
  });
  addBill(e: any): void {
    e.preventDefault();
    console.log('--------->itself', this.billForm.value);
   
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
