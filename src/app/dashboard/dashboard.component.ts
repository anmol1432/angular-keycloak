import { isNgTemplate } from '@angular/compiler';
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
  
  bills:Array<{id:string, describe:string,amount:number}> =[]

   getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
  
  addBill(e: any): void {
    e.preventDefault();
    this.bills.push({...this.billForm.value,id:this.getUniqueId(4)});
    this.billForm.reset()
  }
  total=0;
  getTotal():any {
    this.total=0;
     this.bills.map((item):number=>{
      this.total= this.total + item.amount;
      return this.total;
    })
    return this.total;
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
