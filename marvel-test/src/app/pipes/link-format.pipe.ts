import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkFormat'
})
export class LinkFormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value === 'comiclink') {
      value = 'comic link';
    }
    return value;
  }

}
