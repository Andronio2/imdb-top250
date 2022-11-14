import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginator',
})
export class PaginatorPipe implements PipeTransform {
  transform<T>(arr: T[], from: number, to: number): T[] {
    return arr.slice(from, to);
  }
}
