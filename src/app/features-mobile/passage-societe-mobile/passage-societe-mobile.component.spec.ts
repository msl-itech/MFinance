import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageSocieteMobileComponent } from './passage-societe-mobile.component';

describe('PassageSocieteMobileComponent', () => {
  let component: PassageSocieteMobileComponent;
  let fixture: ComponentFixture<PassageSocieteMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageSocieteMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageSocieteMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});