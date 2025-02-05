import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorerieBeneficeComponent } from './tresorerie-benefice.component';

describe('TresorerieBeneficeComponent', () => {
  let component: TresorerieBeneficeComponent;
  let fixture: ComponentFixture<TresorerieBeneficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TresorerieBeneficeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TresorerieBeneficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
