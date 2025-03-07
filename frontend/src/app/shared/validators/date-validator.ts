import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function completeDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return { incompleteDate: 'Veuillez sélectionner une date complète' };
    }

    const date = new Date(control.value);
    if (isNaN(date.getTime())) {
      return { invalidDate: 'Date invalide' };
    }

    // Vérifier si l'entrée contient bien une année valide
    const year = date.getFullYear();
    if (year < 1900 || year > 2100) {
      return { invalidYear: 'Année invalide' };
    }

    return null; // La date est valide
  };
}
