import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnyadirNoticiaComponent } from './form-anyadir-noticia.component';

describe('FormAnyadirNoticiaComponent', () => {
  let component: FormAnyadirNoticiaComponent;
  let fixture: ComponentFixture<FormAnyadirNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnyadirNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnyadirNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
