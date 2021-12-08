import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'searchBook'
})
export class SearchBookPipe implements PipeTransform {

  transform(value: Book[], filterText: string): Book[] {
    filterText= filterText ? filterText.toLocaleLowerCase() : " "

    return filterText ? value.filter((b:Book)=> b.title.toLocaleLowerCase().indexOf(filterText)!== -1): value;
  }

}
