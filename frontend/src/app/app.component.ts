import {Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExamListComponent } from "./features/candidates/components/exam-list/exam-list-component";
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExamListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }]

})
export class AppComponent {
  title = 'frontend';
}
