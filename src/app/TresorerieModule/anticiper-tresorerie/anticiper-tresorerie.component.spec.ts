import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticiperTresorerieComponent } from './anticiper-tresorerie.component';

describe('AnticiperTresorerieComponent', () => {
  let component: AnticiperTresorerieComponent;
  let fixture: ComponentFixture<AnticiperTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnticiperTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnticiperTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
