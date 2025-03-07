import {Student} from "./student";

export interface Exam {
  id?: number;
  student: Student;
  meeting_point?: string;
  date?: string;  // Format ISO 8601 ex: "2024-06-21T17:00:00Z"
  status: 'A organiser' | 'Annulé' | 'Recherche de place' | 'Confirmé';
}
