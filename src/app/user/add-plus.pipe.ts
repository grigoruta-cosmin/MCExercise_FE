import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSymbol'
})
export class AddSymbolPipe implements PipeTransform {

  transform(value: string, symbol: string): string {
    return value.replace(/ /g, symbol);
  }

}
