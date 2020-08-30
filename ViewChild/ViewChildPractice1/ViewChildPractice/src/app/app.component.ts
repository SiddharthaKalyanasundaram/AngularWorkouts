import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { ChildComponentComponent } from './child-component/child-component.component';

@ Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor (private cd: ChangeDetectorRef) {

  }
  extraCreature: string = "not updated";
  ToViewSpan: boolean = false ;
  @ ViewChild(SharkDirective, { static: false })
  set appShark(directive: SharkDirective) {
    this.extraCreature = directive.creature;
  }

  @ ViewChild('inputElem', {static: false })
  inputElement: ElementRef;

  // If we put static true we can use it in ngOnInit.  Caution it makes it as a static query.
  // That is once view is created, query will get resolved and if there is any structural changes doing by
    // like *ngIf or *ngFor after then it will throw ExpressionChangedError.
  @ ViewChild('inputElem2', {static: true})
  inputElement2: ElementRef;

  @ ViewChild(ChildComponentComponent, {static: false })
  childComponent : ChildComponentComponent;

  ngOnInit(): void {
    console.log("NgOnInit : " + this.extraCreature);
    this.inputElement2.nativeElement.innerText = "Changed!!!";
  }
  ngAfterViewInit(): void {
    this.ToViewSpan = true;
    this.cd.detectChanges();
    this.inputElement.nativeElement.innerText = "Changed!!!";
    this.inputElement2.nativeElement.innerText = "Changed!!!";
    console.log("AfterViewInit : " + this.extraCreature);
    this.childComponent.updateChildComponent();
  }
  title = 'ViewChildPractice';
}
