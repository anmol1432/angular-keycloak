import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() size!: number | string;
  @Input() name!: string;
  @Output() sizeChange = new EventEmitter<number>();
  @Output() nameChange = new EventEmitter<string>();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(delta: number): void {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    console.log('this.size ---> ', this.size);
    this.sizeChange.emit(this.size);
  }
  getval(e:any):void {
    console.log('getval---> ', e.target.value);
    // this.name= e.target.value;
    this.nameChange.emit(e.target.value);
  }
  constructor() {}
  ngOnInit(): void {
    console.log('this.size ---> ', this.size);
  }
}
