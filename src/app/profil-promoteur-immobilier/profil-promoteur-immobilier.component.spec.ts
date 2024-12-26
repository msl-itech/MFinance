import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPromoteurImmobilierComponent } from './profil-promoteur-immobilier.component';

describe('ProfilPromoteurImmobilierComponent', () => {
  let component: ProfilPromoteurImmobilierComponent;
  let fixture: ComponentFixture<ProfilPromoteurImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilPromoteurImmobilierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPromoteurImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
