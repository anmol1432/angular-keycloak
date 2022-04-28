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

  bills:Array<{id:number, describe:string,amount:number}> =[]
  addBill(e: any): void {
    e.preventDefault();
    console.log('--------->itself', this.billForm.value);
    this.bills.push(this.billForm.value);
    console.log("the bills ",this.bills)
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
