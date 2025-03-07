import { Routes } from '@angular/router';
import {ExamFormComponent} from "./features/candidates/components/exam-form/exam-form.component";
import {ExamListComponent} from "./features/candidates/components/exam-list/exam-list-component";

export const routes: Routes = [
  { path: '', component: ExamListComponent },
  { path: 'add-exam', component: ExamFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
