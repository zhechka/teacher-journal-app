import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../common/entities/student';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(students: Student[], prop: string, order: number): Student[] {
    return students.sort((a: Student, b: Student) =>
      a[prop] > b[prop] ? order : order * -1
    );
  }
}
