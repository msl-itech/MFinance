import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { MobileProfileNavigationComponent } from './mobile-profile-navigation.component';

describe('MobileProfileNavigationComponent', () => {
  let component: MobileProfileNavigationComponent;
  let fixture: ComponentFixture<MobileProfileNavigationComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    await TestBed.configureTestingModule({
      imports: [MobileProfileNavigationComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProfileNavigationComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to selected profile', () => {
    const mockEvent = { target: { value: '/profil-independant' } };
    component.navigateToProfile(mockEvent);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/profil-independant']);
  });

  it('should not navigate if same profile selected', () => {
    component.currentProfile = '/promoteur-immobilier';
    const mockEvent = { target: { value: '/promoteur-immobilier' } };
    component.navigateToProfile(mockEvent);
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});