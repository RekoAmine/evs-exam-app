import {Component, LOCALE_ID} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }]

})
export class AppComponent {
  title = 'Gestion des examens - frontend';
}
