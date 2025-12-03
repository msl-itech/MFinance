import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDepartementComponent } from './service-departement.component';

describe('ServiceDepartementComponent', () => {
  let component: ServiceDepartementComponent;
  let fixture: ComponentFixture<ServiceDepartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceDepartementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
