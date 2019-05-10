import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../../common/constants/mock-data';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public getStudents(): Observable<Student[]> {
    return of(data);
  }

  public getSubjects(): Observable<Subject[]> {
    return of(data[0].subjects);
  }
}
