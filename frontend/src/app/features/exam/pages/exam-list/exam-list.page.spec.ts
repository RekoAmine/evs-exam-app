import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamListPage } from './exam-list.page';
import { ExamService } from '../../services/exam.service';
import { Router } from '@angular/router';
import { signal, WritableSignal } from '@angular/core';
import { Exam } from '../../models/exam';
import {ExamStatus} from "../../enums/exam-status.enum";

class MockExamService {

  //  Récupération de la liste signal mockée deuis le service
  exams: WritableSignal<Exam[]> = signal([
    {
      id: 1,
      student: { first_name: 'Amine', last_name: 'ELM' },
      status: ExamStatus.CONFIRMED
    },
    {
      id: 2,
      student: { first_name: 'Alex', last_name: 'Voiture' },
      status: ExamStatus.CANCELED
    }
  ]);

  //  Récupération de la liste des exams mockée depuis le fecth service
  fetchExams() {
    this.exams.set([
      {
        id: 3,
        student: { first_name: 'François', last_name: 'Testeur' },
        status: ExamStatus.TO_ORGANIZE
      }
    ]);
  }
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('ExamListPage', () => {
  let component: ExamListPage;
  let fixture: ComponentFixture<ExamListPage>;
  let examService: ExamService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamListPage],
      providers: [
        { provide: ExamService, useClass: MockExamService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamListPage);
    component = fixture.componentInstance;
    examService = TestBed.inject(ExamService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('devrait être créé', () => {
    expect(component).toBeTruthy();
  });


  it('devrait appeler fetchExams lors de l\'initialisation', () => {
    spyOn(examService, 'fetchExams');

    TestBed.runInInjectionContext(() => {
      component = new ExamListPage();
    });

    expect(examService.fetchExams).toHaveBeenCalled();
  });


  it('devrait récupérer la liste initiale des examens', () => {
    const exams = component.exams();
    expect(exams.length).toBeGreaterThan(0);
    expect(exams[0].status).toBe(ExamStatus.TO_ORGANIZE);
    expect(exams[0].student.first_name).toBe('François');
  });

  it('devrait mettre à jour la liste des examens après fetchExams()', () => {
    examService.fetchExams();
    fixture.detectChanges();

    const exams = component.exams();
    expect(exams.length).toBe(1);
    expect(exams[0].student.first_name).toBe('François');
  });

  it('devrait naviguer vers le formulaire d\'ajout d\'examen', () => {
    component.openExamForm();
    expect(router.navigate).toHaveBeenCalledWith(['/add-exam']);
  });

});
