import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionelSanteComponent } from './professionel-sante.component';

describe('ProfessionelSanteComponent', () => {
  let component: ProfessionelSanteComponent;
  let fixture: ComponentFixture<ProfessionelSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionelSanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionelSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
