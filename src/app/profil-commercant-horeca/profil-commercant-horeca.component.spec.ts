import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCommercantHorecaComponent } from './profil-commercant-horeca.component';

describe('ProfilCommercantHorecaComponent', () => {
  let component: ProfilCommercantHorecaComponent;
  let fixture: ComponentFixture<ProfilCommercantHorecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilCommercantHorecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilCommercantHorecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
