import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let str = value.slice(0, 1).toUpperCase() + value.slice(1);
    return str;
  }
}
