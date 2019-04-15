import { Component, OnInit } from '@angular/core';
import { Student } from '../common/entities/student';
import { Subject } from '../common/entities/subject';
import { data } from '../common/constants/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Teacher Journal';
  students: Student[] = data;
  subjects: Subject[] = data[0].subjects;
  ngOnInit() {
    console.log(this.subjects);
  }
}
