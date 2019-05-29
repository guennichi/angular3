import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie6Component } from './partie6.component';

describe('Partie6Component', () => {
  let component: Partie6Component;
  let fixture: ComponentFixture<Partie6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
