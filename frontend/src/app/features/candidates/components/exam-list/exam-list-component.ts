import {Component, inject, OnInit} from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/exam';
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {ShortenNamePipe} from "../../../../shared/pipes/shorten-name.pipe";
import {ExamStatusBadgeComponent} from "../exam-status-badge/exam-status-badge.component";
import {ExamFormComponent} from "../exam-form/exam-form.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, ShortenNamePipe, ExamStatusBadgeComponent, ExamFormComponent],
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];
  private router = inject(Router);


  constructor(private examService: ExamService) {}

  ngOnInit() {
    this.examService.getExams().subscribe((data) => {
      this.exams = data;
    });
  }


  openExamForm() {
    this.router.navigate(['/add-exam']);
  }



}
