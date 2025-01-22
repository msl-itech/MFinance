import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineSocieteComponent } from './timeline-societe.component';

describe('TimelineSocieteComponent', () => {
  let component: TimelineSocieteComponent;
  let fixture: ComponentFixture<TimelineSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineSocieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
