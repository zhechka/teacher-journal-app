import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../common/entities/student';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  public students: Student[];
  Object = Object;
  private headerItems: string[];

  constructor(private dataService: DataService) {}

  getStudents(): void {
    this.students = this.dataService.getStudents();
    this.headerItems = Object.keys(this.students[0]).slice(0, 4);
  }

  // sortBy(): void {
  //   console.log('sort');
  //   this.students = this.dataService
  //     .getStudents()
  //     .sort((a: Student, b: Student) => (a.id - b.id) * this.order);
  //   this.order = this.order * -1;
  // }

  ngOnInit() {
    this.getStudents();
  }
}
