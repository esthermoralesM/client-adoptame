import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModPerfAdopComponent } from './form-mod-perf-adop.component';

describe('FormModPerfAdopComponent', () => {
  let component: FormModPerfAdopComponent;
  let fixture: ComponentFixture<FormModPerfAdopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModPerfAdopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModPerfAdopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
