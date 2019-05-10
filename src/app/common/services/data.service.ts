import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/data').pipe(
      map(students =>
        students.map(student => {
          return { ...student, address: student.address.split(' ').join('-') };
        })
      ),
      catchError(err => {
        console.log('catch', err);
        return of([]);
      })
    );
  }

  public getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>('http://localhost:3000/data').pipe(
      map(subj => subj[0].subjects),
      catchError(err => {
        console.log('catch', err);
        return of([]);
      })
    );
  }
}
