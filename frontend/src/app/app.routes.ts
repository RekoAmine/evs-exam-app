import { Routes } from '@angular/router';
import {ExamFormPage} from "./features/exam/pages/exam-form/exam-form.page";
import {ExamListPage} from "./features/exam/pages/exam-list/exam-list.page";

export const routes: Routes = [
  { path: '', component: ExamListPage },
  { path: 'add-exam', component: ExamFormPage },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
