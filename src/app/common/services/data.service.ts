import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { data } from '../../common/constants/mock-data';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';

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
      ),
      catchError(err => {
        console.log('catch', err);
        return of([
          {
            id: '',
            name: '',
            lastName: '',
            address: ''
          }
        ]);
      })
    );
  }

  public getSubjects(): Observable<Subject[]> {
    return of(data[0].subjects).pipe(
      catchError(err => {
        console.log('catch', err);
        return of([]);
      })
    );
  }
}
