import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModPerfProtecComponent } from './form-mod-perf-protec.component';

describe('FormModPerfProtecComponent', () => {
  let component: FormModPerfProtecComponent;
  let fixture: ComponentFixture<FormModPerfProtecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModPerfProtecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModPerfProtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
