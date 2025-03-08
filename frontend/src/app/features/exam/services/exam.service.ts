import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../models/exam';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private apiUrl = environment.apiUrl;

  exams = signal<Exam[]>([]);

  constructor(private http: HttpClient) {}

  fetchExams() {
    this.http.get<Exam[]>(this.apiUrl).subscribe(this.exams.set);
  }

  addExam(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(this.apiUrl, exam).pipe(
      tap((newExam: Exam) => {
        this.exams.set([...this.exams(), newExam]);
      })
    );
  }
}
