import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): any {
    let finalString = '';
    // Parto la cadena en espacios y lo recorro
    for(let str of value.split(' ')){
      // Pongo en mayuscula la primera letra de cada cadena
      finalString += str.trim().charAt(0).toUpperCase() + str.slice(1)+ ' ';
    }
    return finalString;
  }

}
