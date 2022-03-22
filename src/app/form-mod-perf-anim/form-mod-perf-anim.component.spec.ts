import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModPerfAnimComponent } from './form-mod-perf-anim.component';

describe('FormModPerfAnimComponent', () => {
  let component: FormModPerfAnimComponent;
  let fixture: ComponentFixture<FormModPerfAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModPerfAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModPerfAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
