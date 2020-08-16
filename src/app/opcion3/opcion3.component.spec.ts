import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion3Component } from './opcion3.component';

describe('Opcion3Component', () => {
  let component: Opcion3Component;
  let fixture: ComponentFixture<Opcion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opcion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opcion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
