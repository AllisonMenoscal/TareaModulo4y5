import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion4Component } from './opcion4.component';

describe('Opcion4Component', () => {
  let component: Opcion4Component;
  let fixture: ComponentFixture<Opcion4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opcion4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcion4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
