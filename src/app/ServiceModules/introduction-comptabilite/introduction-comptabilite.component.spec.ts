import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductionComptabiliteComponent } from './introduction-comptabilite.component';

describe('IntroductionComptabiliteComponent', () => {
  let component: IntroductionComptabiliteComponent;
  let fixture: ComponentFixture<IntroductionComptabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroductionComptabiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroductionComptabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
