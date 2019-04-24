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
  private headerItems: string[];
  Object = Object;

  constructor(private dataService: DataService) {}

  getStudents(): void {
    this.students = this.dataService.getStudents();
    this.headerItems = Object.keys(this.students[0]).slice(0, 4);
  }
  ngOnInit() {
    this.getStudents();
  }
}
