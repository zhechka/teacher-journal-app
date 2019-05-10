import { Injectable } from '@angular/core';
import { data } from '../../common/constants/mock-data';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public getStudents(): Student[] {
    return data;
  }

  public getSubjects(): Subject[] {
    return data[0].subjects;
  }
}
