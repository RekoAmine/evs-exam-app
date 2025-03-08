import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName',
  standalone: true
})
export class ShortenNamePipe implements PipeTransform {
  /**
   * Transforme un prénom et un nom en format court.
   * @param firstName - Prénom complet
   * @param lastName - Nom de famille
   * @returns Chaîne formatée avec `PremierPrenom.N`
   */
  transform(firstName: string, lastName: string): string {
    if (!firstName || !lastName) return 'Nom inconnu';

    //Garder le premier prénom
    const firstNameShort = firstName.split(' ')[0];
    const formattedFirstName = firstNameShort.charAt(0).toUpperCase() + firstNameShort.slice(1).toLowerCase();

    //Prendre la première lettre du nom et la mettre en majuscule
    const lastNameFirstLetter = lastName.charAt(0).toUpperCase();

    return `${formattedFirstName}.${lastNameFirstLetter}`;
  }
}
