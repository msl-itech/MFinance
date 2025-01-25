import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomieAnalysieComponent } from './economie-analysie.component';

describe('EconomieAnalysieComponent', () => {
  let component: EconomieAnalysieComponent;
  let fixture: ComponentFixture<EconomieAnalysieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EconomieAnalysieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomieAnalysieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
