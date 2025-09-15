import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPromoteurImmobilierMobileComponent } from './profil-promoteur-immobilier-mobile.component';

describe('ProfilPromoteurImmobilierMobileComponent', () => {
  let component: ProfilPromoteurImmobilierMobileComponent;
  let fixture: ComponentFixture<ProfilPromoteurImmobilierMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilPromoteurImmobilierMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPromoteurImmobilierMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});