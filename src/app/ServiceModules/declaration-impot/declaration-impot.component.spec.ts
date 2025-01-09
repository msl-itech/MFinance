import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationImpotComponent } from './declaration-impot.component';

describe('DeclarationImpotComponent', () => {
  let component: DeclarationImpotComponent;
  let fixture: ComponentFixture<DeclarationImpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeclarationImpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationImpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
