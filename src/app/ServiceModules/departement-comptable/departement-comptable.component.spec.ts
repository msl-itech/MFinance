import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementComptableComponent } from './departement-comptable.component';

describe('DepartementComptableComponent', () => {
  let component: DepartementComptableComponent;
  let fixture: ComponentFixture<DepartementComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartementComptableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartementComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
