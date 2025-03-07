import { Component, computed, Input, signal } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-badge.component.html',
})
export class ExmStatusBadgeComponent {

  private _status = signal<string>('A organiser');

  @Input()
  set status(value: string) {
    this._status.set(value);
  }

  get status() {
    return this._status();
  }

   statusClasses = computed(() => {
    switch (this.status) {
      case 'Confirmé': return 'bg-green-100 text-green-600';
      case 'A organiser': return 'bg-orange-100 text-orange-600';
      case 'Annulé': return 'bg-red-100 text-red-600';
      case 'Recherche de place': return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  });

   iconClasses = computed(() => {
    switch (this.status) {
      case 'Confirmé': return 'fas fa-check-circle text-green-600';
      case 'A organiser': return 'fas fa-exclamation-circle text-orange-600';
      case 'Annulé': return 'fas fa-times-circle text-red-600';
      case 'Recherche de place': return 'fas fa-hourglass-half text-gray-600';
      default: return 'fas fa-hourglass-half text-gray-600';
    }
  });
}
