import { Component, computed, Input, signal } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ExamStatus} from "../../enums/exam-status.enum";

@Component({
  selector: 'app-exam-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exam-status-badge.component.html',
})
export class ExamStatusBadgeComponent {

  private _status = signal<ExamStatus>(ExamStatus.TO_ORGANIZE);

  @Input()
  set status(value: ExamStatus) {
    this._status.set(value);
  }

  get status(): ExamStatus {
    return this._status();
  }


  statusClasses = computed(() => {
    switch (this.status) {
      case ExamStatus.CONFIRMED: return 'bg-green-100 text-green-600';
      case ExamStatus.TO_ORGANIZE: return 'bg-orange-100 text-orange-600';
      case ExamStatus.CANCELED: return 'bg-red-100 text-red-600';
      case ExamStatus.SEARCHING_PLACE: return 'bg-gray-100 text-gray-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  });

  iconClasses = computed(() => {
    switch (this.status) {
      case ExamStatus.CONFIRMED: return 'fas fa-check-circle text-green-600';
      case ExamStatus.TO_ORGANIZE: return 'fas fa-exclamation-circle text-orange-600';
      case ExamStatus.CANCELED: return 'fas fa-times-circle text-red-600';
      case ExamStatus.SEARCHING_PLACE: return 'fas fa-hourglass-half text-gray-600';
      default: return 'fas fa-hourglass-half text-gray-600';
    }
  });
}
