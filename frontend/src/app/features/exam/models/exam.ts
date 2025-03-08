import {Student} from "./student";
import {ExamStatus} from "../enums/exam-status.enum";

export interface Exam {
  id?: number;
  student: Student;
  meeting_point?: string;
  date?: string;
  status: ExamStatus;
}
