import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any[], searchText: string, filteredBy: string): any[]{

    if (!value) { return []; }
    if (!searchText) { return value; }
    searchText = searchText.toLowerCase();

    return value.filter(item => {
      if (item && item[filteredBy]) {
        return item[filteredBy].toLowerCase().includes(searchText);
      }
      return false;
    });
    
  }

}
