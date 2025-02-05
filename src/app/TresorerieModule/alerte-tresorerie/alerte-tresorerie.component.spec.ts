import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteTresorerieComponent } from './alerte-tresorerie.component';

describe('AlerteTresorerieComponent', () => {
  let component: AlerteTresorerieComponent;
  let fixture: ComponentFixture<AlerteTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlerteTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlerteTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
