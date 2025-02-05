import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtegerTresorerieComponent } from './proteger-tresorerie.component';

describe('ProtegerTresorerieComponent', () => {
  let component: ProtegerTresorerieComponent;
  let fixture: ComponentFixture<ProtegerTresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProtegerTresorerieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtegerTresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
