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
  public order = 1;
  public prop: string;
  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.students = this.dataService.getStudents();
    this.headerItems = Object.keys(this.students[0]).slice(0, 4);
  }

  public changeSortingOrder(property): void {
    this.prop = property;
    this.order = this.order * -1;
    console.log(this.order, this.prop);
  }
}
