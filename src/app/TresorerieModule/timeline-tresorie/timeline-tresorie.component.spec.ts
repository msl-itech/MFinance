import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTresorieComponent } from './timeline-tresorie.component';

describe('TimelineTresorieComponent', () => {
  let component: TimelineTresorieComponent;
  let fixture: ComponentFixture<TimelineTresorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineTresorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineTresorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
