import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestirTresorerieComponent } from './investir-tresorerie.component';

describe('InvestirTresorerieComponent', () => {
  let component: InvestirTresorerieComponent;
  let fixture: ComponentFixture<InvestirTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvestirTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestirTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
