import { Injectable } from '@angular/core';
import { data } from '../../common/constants/mock-data';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  getStudents(): Student[] {
    return data;
  }

  getSubjects(): Subject[] {
    return data[0].subjects;
  }
}
