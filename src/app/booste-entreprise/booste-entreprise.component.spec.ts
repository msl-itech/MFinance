import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosteEntrepriseComponent } from './booste-entreprise.component';

describe('BoosteEntrepriseComponent', () => {
  let component: BoosteEntrepriseComponent;
  let fixture: ComponentFixture<BoosteEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoosteEntrepriseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoosteEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
