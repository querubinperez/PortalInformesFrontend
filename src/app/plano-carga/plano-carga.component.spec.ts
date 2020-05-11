import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoCargaComponent } from './plano-carga.component';

describe('PlanoCargaComponent', () => {
  let component: PlanoCargaComponent;
  let fixture: ComponentFixture<PlanoCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
