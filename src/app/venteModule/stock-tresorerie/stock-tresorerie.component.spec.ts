import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTresorerieComponent } from './stock-tresorerie.component';

describe('StockTresorerieComponent', () => {
  let component: StockTresorerieComponent;
  let fixture: ComponentFixture<StockTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
