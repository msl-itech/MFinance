import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarieIndependantComponent } from './salarie-independant.component';

describe('SalarieIndependantComponent', () => {
  let component: SalarieIndependantComponent;
  let fixture: ComponentFixture<SalarieIndependantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalarieIndependantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarieIndependantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
