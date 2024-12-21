import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSocieteMoyenComponent } from './profil-societe-moyen.component';

describe('ProfilSocieteMoyenComponent', () => {
  let component: ProfilSocieteMoyenComponent;
  let fixture: ComponentFixture<ProfilSocieteMoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilSocieteMoyenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilSocieteMoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
