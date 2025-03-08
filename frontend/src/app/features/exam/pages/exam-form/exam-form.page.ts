import { Component, inject, signal, effect } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ExamService } from '../../services/exam.service';
import { CommonModule } from '@angular/common';
import { Exam } from '../../models/exam';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {ExamStatus} from "../../enums/exam-status.enum";

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exam-form.page.html'
})
export class ExamFormPage {

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private examService = inject(ExamService);
  statusOptions = Object.values(ExamStatus);

  examForm: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    meeting_point: [''],
    date: ['', Validators.pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)],
    status: [ExamStatus.TO_ORGANIZE]
  });

  get firstNameField() { return this.examForm.get('first_name'); }
  get lastNameField() { return this.examForm.get('last_name'); }
  get dateField() { return this.examForm.get('date'); }

  private cleanFormValues() {
    Object.keys(this.examForm.controls).forEach((key) => {
      const control = this.examForm.get(key);
      if (control && typeof control.value === 'string') {
        control.setValue(control.value.trim());
      }
    });
  }

  navigateToExamList() {
    this.router.navigate(['/']);
  }

  async onSubmit() {

    this.cleanFormValues();

    if (this.examForm.invalid) {
      this.examForm.markAllAsTouched();
      return;
    }

    const exam: Exam = this.mapFormToExam();

    try {
          await lastValueFrom(this.examService.addExam(exam));
          this.examForm.reset();
          this.navigateToExamList()
    } catch (error) {
         console.error("Erreur lors de l'ajout d'un nouvel examen", error);
    }
  }

  private mapFormToExam(): Exam {
    return {
      student: {
        first_name: this.examForm.value.first_name,
        last_name: this.examForm.value.last_name
      },
      meeting_point: this.examForm.value.meeting_point || '',
      date: this.examForm.value.date || '',
      status: this.examForm.value.status
    };
  }
}

