import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChildComponent } from './multiple-child.component';

describe('MultipleChildComponent', () => {
  let component: MultipleChildComponent;
  let fixture: ComponentFixture<MultipleChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
