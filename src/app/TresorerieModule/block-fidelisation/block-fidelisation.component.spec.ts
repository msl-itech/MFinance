import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFidelisationComponent } from './block-fidelisation.component';

describe('BlockFidelisationComponent', () => {
  let component: BlockFidelisationComponent;
  let fixture: ComponentFixture<BlockFidelisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockFidelisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFidelisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
