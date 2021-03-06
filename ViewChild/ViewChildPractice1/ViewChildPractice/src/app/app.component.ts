import { Component, AfterViewInit, OnInit, ViewChild, ElementRef, ChangeDetectorRef, ViewChildren, QueryList,
          TemplateRef, Injector, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { SharkDirective } from './shark.directive';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MultipleChildComponent } from './multiple-child/multiple-child.component';
import { HostComponent } from './host/host.component';

@ Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor (private cd: ChangeDetectorRef,
               private injector: Injector,
               private r: ComponentFactoryResolver) {
 }
  extraCreature: string = "not updated";
  ToViewSpan: boolean = false ;
  host: typeof HostComponent = HostComponent;
  compoenent: ComponentRef< HostComponent> = null;
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

  @ ViewChildren(MultipleChildComponent, {read: false })
  multipleChildComponent: QueryList< MultipleChildComponent >;

  @ ViewChild('templateRef', {static: false } )
  templateRef: TemplateRef < any>;

  @ ViewChild('container', {read: ViewContainerRef, static: false } )
  container: ViewContainerRef;

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
    this.multipleChildComponent.forEach((child, index) => {
      console.log(child.getRandon());
    })
    this.childComponent.updateChildComponent();

    this.templateRef.createEmbeddedView(null);
    console.log(this.templateRef.elementRef.nativeElement.innerText);


    let factory = this.r.resolveComponentFactory(HostComponent);
    let componentRef = factory.create(this.injector);
    let view = componentRef.hostView;

    // this.container.insert(this.templateRef.createEmbeddedView(null));
    this.container.insert(view);

  }
  title = 'ViewChildPractice';
}
