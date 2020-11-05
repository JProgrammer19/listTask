import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerlistadoComponent } from './verlistado.component';

describe('VerlistadoComponent', () => {
  let component: VerlistadoComponent;
  let fixture: ComponentFixture<VerlistadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerlistadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerlistadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
