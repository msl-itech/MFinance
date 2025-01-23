import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGuerrePrixComponent } from './timeline-guerre-prix.component';

describe('TimelineGuerrePrixComponent', () => {
  let component: TimelineGuerrePrixComponent;
  let fixture: ComponentFixture<TimelineGuerrePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineGuerrePrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineGuerrePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
