import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoSocieteComponent } from './promo-societe.component';

describe('PromoSocieteComponent', () => {
  let component: PromoSocieteComponent;
  let fixture: ComponentFixture<PromoSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromoSocieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
