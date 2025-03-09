import { Component, inject, signal } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { CommonModule } from '@angular/common';
import { ShortenNamePipe } from '../../../../shared/pipes/shorten-name.pipe';
import { ExamStatusBadgeComponent } from '../../components/exam-status-badge/exam-status-badge.component';
import { Router } from '@angular/router';
import {ExamFormPage} from "../exam-form/exam-form.page";

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, ShortenNamePipe, ExamStatusBadgeComponent, ExamFormPage],
  templateUrl: './exam-list.page.html'
})
export class ExamListPage {

  private examService = inject(ExamService);
  private router = inject(Router);

  exams = this.examService.exams;

  constructor() {
    this.examService.fetchExams();
  }

  openExamForm() {
    this.router.navigate(['/add-exam']);
  }
}
