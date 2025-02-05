import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteCourantAdministrateurComponent } from './compte-courant-administrateur.component';

describe('CompteCourantAdministrateurComponent', () => {
  let component: CompteCourantAdministrateurComponent;
  let fixture: ComponentFixture<CompteCourantAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompteCourantAdministrateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteCourantAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
