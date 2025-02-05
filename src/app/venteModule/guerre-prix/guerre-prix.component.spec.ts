import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuerrePrixComponent } from './guerre-prix.component';

describe('GuerrePrixComponent', () => {
  let component: GuerrePrixComponent;
  let fixture: ComponentFixture<GuerrePrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuerrePrixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuerrePrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
