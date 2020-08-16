import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion5Component } from './opcion5.component';

describe('Opcion5Component', () => {
  let component: Opcion5Component;
  let fixture: ComponentFixture<Opcion5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opcion5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcion5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
