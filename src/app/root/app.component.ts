import { Component, OnInit } from '@angular/core';
import { Student } from '../common/entities/student';
import { data } from '../common/constants/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Teacher Journal';
  students: Student[] = data;
  ngOnInit() {
    console.log(this.students);
  }
}
