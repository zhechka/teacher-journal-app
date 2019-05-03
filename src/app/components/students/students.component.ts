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
  public headerItems: string[];

  constructor(private dataService: DataService) {}

  public getStudents(): void {
    this.students = this.dataService.getStudents();
    this.headerItems = Object.keys(this.students[0]).slice(0, 4);
  }

  public ngOnInit() {
    this.getStudents();
  }
}
