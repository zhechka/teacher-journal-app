import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';

const BASE_URL = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(BASE_URL + 'students').pipe(
      catchError(err => {
        console.log('catch', err);
        return of([]);
      })
    );
  }

  public getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(BASE_URL + 'subjects').pipe(
      catchError(err => {
        console.log('catch', err);
        return of([]);
      })
    );
  }

  public addNewStudent(student): Observable<Student> {
    return this.http.post<Student>(BASE_URL + 'students', student, httpOptions);
  }

  public addNewSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(BASE_URL + 'subjects', subject, httpOptions);
  }

  public addNewMarcsForSubject(marks: Subject): Observable<Subject> {
    return this.http.put<Subject>(
      BASE_URL + 'subjects/' + `${marks.id}`,
      marks,
      httpOptions
    );
  }
}
