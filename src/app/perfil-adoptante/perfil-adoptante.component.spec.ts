import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilAdoptanteComponent } from './perfil-adoptante.component';

describe('PerfilAdoptanteComponent', () => {
  let component: PerfilAdoptanteComponent;
  let fixture: ComponentFixture<PerfilAdoptanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilAdoptanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilAdoptanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
