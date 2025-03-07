import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) return null; // Si le champ est vide, pas d'erreur

    const date = new Date(value);
    if (isNaN(date.getTime())) {
      return { invalidDate: 'Date invalide. Veuillez entrer une date correcte.' };
    }

    const year = date.getFullYear();
    if (year < 1900 || year > 2100) {
      return { invalidYear: 'Année invalide. Veuillez entrer une année entre 1900 et 2100.' };
    }

    return null; // La date est correcte
  };
}
