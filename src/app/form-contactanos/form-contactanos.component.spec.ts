import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactanosComponent } from './form-contactanos.component';

describe('FormContactanosComponent', () => {
  let component: FormContactanosComponent;
  let fixture: ComponentFixture<FormContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContactanosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
