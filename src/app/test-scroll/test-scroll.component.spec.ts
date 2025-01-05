import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScrollComponent } from './test-scroll.component';

describe('TestScrollComponent', () => {
  let component: TestScrollComponent;
  let fixture: ComponentFixture<TestScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
