import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { data } from '../../common/constants/mock-data';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getStudents(): Observable<Student[]> {
    return of(data).pipe(
      map(students =>
        students.map(student => {
          return { ...student, address: student.address.split(' ').join('-') };
        })
      )
    );
  }

  public getSubjects(): Observable<Subject[]> {
    return of(data[0].subjects);
  }
}
