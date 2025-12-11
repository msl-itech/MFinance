import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyExternalisedComponent } from './why-externalised.component';

describe('WhyExternalisedComponent', () => {
  let component: WhyExternalisedComponent;
  let fixture: ComponentFixture<WhyExternalisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyExternalisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyExternalisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
