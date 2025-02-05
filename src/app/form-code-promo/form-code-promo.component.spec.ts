import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCodePromoComponent } from './form-code-promo.component';

describe('FormCodePromoComponent', () => {
  let component: FormCodePromoComponent;
  let fixture: ComponentFixture<FormCodePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCodePromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCodePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
