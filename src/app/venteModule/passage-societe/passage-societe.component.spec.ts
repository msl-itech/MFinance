import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageSocieteComponent } from './passage-societe.component';

describe('PassageSocieteComponent', () => {
  let component: PassageSocieteComponent;
  let fixture: ComponentFixture<PassageSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassageSocieteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassageSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
