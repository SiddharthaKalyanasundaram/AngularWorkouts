import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-child',
  templateUrl: './multiple-child.component.html',
  styleUrls: ['./multiple-child.component.css']
})
export class MultipleChildComponent implements OnInit {

  random: number = 0;
  constructor() { }

  ngOnInit() {
    this.random = Math.random();
  }


  getRandon() {
    console.log(this.random);
  }


}
