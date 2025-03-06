import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam-service';
import { Exam } from '../../models/exam';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  exams: Exam[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit() {
    this.examService.getExams().subscribe((data) => {
      this.exams = data;
    });
  }
}
