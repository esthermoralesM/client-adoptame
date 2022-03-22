import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModNoticComponent } from './form-mod-notic.component';

describe('FormModNoticComponent', () => {
  let component: FormModNoticComponent;
  let fixture: ComponentFixture<FormModNoticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModNoticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModNoticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
