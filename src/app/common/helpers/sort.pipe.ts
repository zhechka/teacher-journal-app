import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../../common/entities/student';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(students: Student[]): Student[] {
    return students.sort((a: Student, b: Student) => a.id - b.id);
  }
}
