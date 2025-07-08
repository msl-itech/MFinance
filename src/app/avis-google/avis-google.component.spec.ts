import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisGoogleComponent } from './avis-google.component';

describe('AvisGoogleComponent', () => {
  let component: AvisGoogleComponent;
  let fixture: ComponentFixture<AvisGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvisGoogleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvisGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
