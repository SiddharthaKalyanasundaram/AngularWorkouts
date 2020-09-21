import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharkDirective } from './shark.directive';
import { ChildComponentComponent } from './child-component/child-component.component';
import { MultipleChildComponent } from './multiple-child/multiple-child.component';
import { HostComponent } from './host/host.component';

@NgModule({
  declarations: [
    AppComponent,
    SharkDirective,
    ChildComponentComponent,
    MultipleChildComponent,
    HostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [HostComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
