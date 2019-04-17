import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../common/entities/student';
import { data } from '../../common/constants/mock-data';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  students: Student[] = data;
  constructor() {}

  ngOnInit() {}
}
