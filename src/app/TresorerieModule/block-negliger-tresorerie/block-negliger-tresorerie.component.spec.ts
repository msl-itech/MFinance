import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNegligerTresorerieComponent } from './block-negliger-tresorerie.component';

describe('BlockNegligerTresorerieComponent', () => {
  let component: BlockNegligerTresorerieComponent;
  let fixture: ComponentFixture<BlockNegligerTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockNegligerTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockNegligerTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
