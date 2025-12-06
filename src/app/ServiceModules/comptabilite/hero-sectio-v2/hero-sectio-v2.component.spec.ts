import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectioV2Component } from './hero-sectio-v2.component';

describe('HeroSectioV2Component', () => {
  let component: HeroSectioV2Component;
  let fixture: ComponentFixture<HeroSectioV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSectioV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectioV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
