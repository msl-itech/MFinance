import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineStockComponent } from './timeline-stock.component';

describe('TimelineStockComponent', () => {
  let component: TimelineStockComponent;
  let fixture: ComponentFixture<TimelineStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
