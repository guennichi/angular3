import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Partie5Component } from './partie5.component';

describe('Partie5Component', () => {
  let component: Partie5Component;
  let fixture: ComponentFixture<Partie5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Partie5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Partie5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
