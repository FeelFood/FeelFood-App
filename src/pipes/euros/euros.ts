import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'euros'})
export class EurosPipe implements PipeTransform {
  transform(value: number, args: string[]): any {
    if (value===null){
      value = 0;
    }
    return (Math.round(value*100)/100) + ' €';
  };
}
