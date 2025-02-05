import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilGrandeEntrepriseComponent } from './profil-grande-entreprise.component';

describe('ProfilGrandeEntrepriseComponent', () => {
  let component: ProfilGrandeEntrepriseComponent;
  let fixture: ComponentFixture<ProfilGrandeEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfilGrandeEntrepriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilGrandeEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
