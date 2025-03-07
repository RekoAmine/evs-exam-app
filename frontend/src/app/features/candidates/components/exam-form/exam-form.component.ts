import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ExamService } from '../../services/exam.service';
import { CommonModule } from '@angular/common';
import {Exam} from "../../models/exam";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exam-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exam-form.component.html'
})
export class ExamFormComponent {

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private examService = inject(ExamService);

  statusOptions = ['A organiser', 'Annulé', 'Recherche de place', 'Confirmé'];

  examForm: FormGroup = this.fb.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    meeting_point: [''],
    date: ['', Validators.pattern(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)],
    status: ['A organiser']
  });

  successMessage: string = '';

  // Getters sécurisés avec `!` pour éviter null
  get firstNameField() { return this.examForm.get('first_name')!; }
  get lastNameField() { return this.examForm.get('last_name')!; }
  get dateField() { return this.examForm.get('date')!; }

  navigateToExamList() {
    this.router.navigate(['/']);
  }

  onSubmit() {

    this.examForm.patchValue({
      first_name: this.examForm.value.first_name?.trim(),
      last_name: this.examForm.value.last_name?.trim(),
      meeting_point: this.examForm.value.meeting_point?.trim() || ''
    });

    if (this.examForm.invalid){
      this.examForm.markAllAsTouched();
      return;
    }

    const exam: Exam = {
      student: {
        first_name: this.firstNameField.value.trim(),
        last_name: this.lastNameField.value.trim()
      },
      meeting_point: this.examForm.value.meeting_point.trim() || '',
      date: this.examForm.value.date.trim() || '',
      status: this.examForm.value.status.trim()
    };

    this.examService.addExam(exam).subscribe({
      next: () => {
        this.successMessage = "Examen ajouté avec succès !";
        this.examForm.reset();
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout", error);
      }
    });
  }
}
