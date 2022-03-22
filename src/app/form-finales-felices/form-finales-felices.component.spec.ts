import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFinalesFelicesComponent } from './form-finales-felices.component';

describe('FormFinalesFelicesComponent', () => {
  let component: FormFinalesFelicesComponent;
  let fixture: ComponentFixture<FormFinalesFelicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFinalesFelicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFinalesFelicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
