import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSurveillanceComponent } from './block-surveillance.component';

describe('BlockSurveillanceComponent', () => {
  let component: BlockSurveillanceComponent;
  let fixture: ComponentFixture<BlockSurveillanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockSurveillanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
