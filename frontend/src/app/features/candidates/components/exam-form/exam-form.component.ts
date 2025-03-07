import {Component} from "@angular/core";
import {ExamService} from "../../services/exam-service";
import {Exam} from "../../models/exam";
import console = require("console");

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
})
export class ExamFormComponent {
  newExam: Exam = { id: 0, candidate: '', location: '', date: '', time: '', status: 'pending' };

  constructor(private examService: ExamService) {}

  addExam() {
    this.examService.addExam(this.newExam).subscribe(() => {
      console.log('Examen ajouté');
    });
  }
}
