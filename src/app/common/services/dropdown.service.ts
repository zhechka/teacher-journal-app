import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';
import { TreeviewItem } from 'ngx-treeview/src/treeview-item';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class DropDownServise {
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

  getBooks(): TreeviewItem[] {
    const subjects = new TreeviewItem({
      text: 'Children',
      value: 1,
      collapsed: true,
      children: [
        { text: 'Baby 3-5', value: 11 },
        { text: 'Baby 6-8', value: 12 },
        { text: 'Baby 9-12', value: 13 }
      ]
    });

    return [subjects];
  }
}
