import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';
import { of, throwError } from 'rxjs';

import { DiagnosticPassageSocieteComponent } from './diagnostic-passage-societe.component';
import { OdooService } from '../../services/odoo.service';

describe('DiagnosticPassageSocieteComponent', () => {
  let component: DiagnosticPassageSocieteComponent;
  let fixture: ComponentFixture<DiagnosticPassageSocieteComponent>;
  let mockToastr: jasmine.SpyObj<ToastrService>;
  let mockOdooService: jasmine.SpyObj<OdooService>;

  beforeEach(async () => {
    mockToastr = jasmine.createSpyObj('ToastrService', ['success', 'error', 'warning']);
    mockOdooService = jasmine.createSpyObj('OdooService', ['createLead']);

    await TestBed.configureTestingModule({
      declarations: [DiagnosticPassageSocieteComponent],
      imports: [FormsModule, BrowserAnimationsModule],
      providers: [
        { provide: ToastrService, useValue: mockToastr },
        { provide: OdooService, useValue: mockOdooService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DiagnosticPassageSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 4 questions', () => {
    expect(component.questions.length).toBe(4);
  });

  it('should start at question 0', () => {
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should calculate progress percentage correctly', () => {
    component.currentQuestionIndex = 0;
    expect(component.progressPercentage).toBe(25);

    component.currentQuestionIndex = 1;
    expect(component.progressPercentage).toBe(50);

    component.currentQuestionIndex = 3;
    expect(component.progressPercentage).toBe(100);
  });

  it('should select an option', () => {
    const firstOption = component.questions[0].options[0];
    component.selectOption(firstOption);

    expect(component.answers.revenus).toBe(firstOption.value);
  });

  it('should navigate to next question when answer is selected', () => {
    const firstOption = component.questions[0].options[0];
    component.selectOption(firstOption);
    component.nextQuestion();

    expect(component.currentQuestionIndex).toBe(1);
  });

  it('should show warning when trying to proceed without answer', () => {
    component.nextQuestion();

    expect(mockToastr.warning).toHaveBeenCalledWith(
      'Veuillez sélectionner une option',
      'Attention'
    );
  });

  it('should navigate to previous question', () => {
    component.currentQuestionIndex = 2;
    component.previousQuestion();

    expect(component.currentQuestionIndex).toBe(1);
  });

  it('should not go below question 0', () => {
    component.currentQuestionIndex = 0;
    component.previousQuestion();

    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should calculate result with low score', () => {
    // Select lowest scoring options
    component.answers = {
      revenus: 'moins-40k',    // 0 points
      stabilite: 'demarrage',   // 0 points
      objectif: 'optimiser-fiscal', // 2 points
      ressenti: 'pas-clair'     // 1 point
    };

    component.currentQuestionIndex = 3;
    component.nextQuestion();

    expect(component.result).toBeTruthy();
    expect(component.result?.score).toBe(3);
    expect(component.result?.level).toBe('low');
  });

  it('should calculate result with high score', () => {
    // Select highest scoring options
    component.answers = {
      revenus: 'plus-110k',        // 6 points
      stabilite: 'plus-2ans',      // 4 points
      objectif: 'investir',        // 4 points
      ressenti: 'besoin-strategie' // 5 points
    };

    component.currentQuestionIndex = 3;
    component.nextQuestion();

    expect(component.result).toBeTruthy();
    expect(component.result?.score).toBe(19);
    expect(component.result?.level).toBe('high');
  });

  it('should emit diagnosticComplete event when result is calculated', (done) => {
    component.diagnosticComplete.subscribe((result) => {
      expect(result).toBeTruthy();
      expect(result.score).toBeGreaterThanOrEqual(0);
      done();
    });

    component.answers = {
      revenus: 'plus-110k',
      stabilite: 'plus-2ans',
      objectif: 'investir',
      ressenti: 'besoin-strategie'
    };

    component.currentQuestionIndex = 3;
    component.nextQuestion();
  });

  it('should submit email successfully', () => {
    mockOdooService.createLead.and.returnValue(of({ success: true }));

    component.result = {
      score: 15,
      maxScore: 20,
      level: 'high',
      title: 'Test',
      description: 'Test',
      recommendation: 'Test',
      ctaText: 'Test',
      ctaAction: 'contact',
      answers: {
        revenus: 'plus-110k',
        stabilite: 'plus-2ans',
        objectif: 'investir',
        ressenti: 'besoin-strategie'
      }
    };

    component.emailData = {
      nom: 'Test User',
      email: 'test@example.com'
    };

    component.submitEmail();

    expect(mockOdooService.createLead).toHaveBeenCalled();
    expect(mockToastr.success).toHaveBeenCalled();
  });

  it('should show error on email submit failure', () => {
    mockOdooService.createLead.and.returnValue(
      throwError(() => new Error('Network error'))
    );

    component.result = {
      score: 15,
      maxScore: 20,
      level: 'high',
      title: 'Test',
      description: 'Test',
      recommendation: 'Test',
      ctaText: 'Test',
      ctaAction: 'contact',
      answers: {
        revenus: 'plus-110k',
        stabilite: 'plus-2ans',
        objectif: 'investir',
        ressenti: 'besoin-strategie'
      }
    };

    component.emailData = {
      nom: 'Test User',
      email: 'test@example.com'
    };

    component.submitEmail();

    expect(mockToastr.error).toHaveBeenCalled();
  });

  it('should restart diagnostic correctly', () => {
    component.answers = {
      revenus: 'plus-110k',
      stabilite: 'plus-2ans',
      objectif: 'investir',
      ressenti: 'besoin-strategie'
    };
    component.currentQuestionIndex = 3;
    component.showResult = true;

    component.restartDiagnostic();

    expect(component.currentQuestionIndex).toBe(0);
    expect(component.showResult).toBe(false);
    expect(component.answers.revenus).toBe('');
  });
});
