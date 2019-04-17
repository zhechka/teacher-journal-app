import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../common/entities/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  @Input() students: Student[];
  constructor() {}

  ngOnInit() {}
}
