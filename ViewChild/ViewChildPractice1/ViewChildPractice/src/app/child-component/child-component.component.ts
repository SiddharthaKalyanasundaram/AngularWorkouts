import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
  }

  updateChildComponent() {
    document.getElementById("val").innerText = "Updated."
  }


}
