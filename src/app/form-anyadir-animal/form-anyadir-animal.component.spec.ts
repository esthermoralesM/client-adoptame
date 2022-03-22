import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnyadirAnimalComponent } from './form-anyadir-animal.component';

describe('FormAnyadirAnimalComponent', () => {
  let component: FormAnyadirAnimalComponent;
  let fixture: ComponentFixture<FormAnyadirAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnyadirAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnyadirAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
