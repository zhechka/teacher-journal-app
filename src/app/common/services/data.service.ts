import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students').pipe(
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
    return this.http.get<Subject[]>('http://localhost:3000/subjects').pipe(
      catchError(err => {
        console.log('catch', err);
        return of([]);
      })
    );
  }

  public addNewStudent(student: Student): Observable<Student> {
    console.log('im servise', student);
    return this.http.post<Student>(
      'http://localhost:3000/students',
      student,
      httpOptions
    );
  }

  public addNewSubject(subject: Subject): Observable<Subject> {
    console.log('im servise', subject);
    return this.http.post<Subject>(
      'http://localhost:3000/subjects/',
      subject,
      httpOptions
    );
  }

  public addNewMarcsForSubject(marks: Subject): Observable<Subject> {
    return this.http.put<Subject>(
      `http://localhost:3000/subjects/${marks.id}`,
      marks,
      httpOptions
    );
  }
}
