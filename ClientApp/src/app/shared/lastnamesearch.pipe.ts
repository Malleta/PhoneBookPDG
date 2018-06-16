import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'LastNameSearch'
})

@Injectable()
export class LastnamesearchPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!value) {
      return items;
    }
    return items.filter(it => it[field] == value);
  }
}
