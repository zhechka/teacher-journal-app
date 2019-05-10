import { Component, OnInit } from '@angular/core';
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
  public formVisible = false;
  public order = 1;
  public prop: string;
  public nameOfInputs = [
    {
      name: 'Name ',
      isRequared: true
    },
    {
      name: 'Last name',
      isRequared: true
    },
    {
      name: 'Address',
      isRequared: false
    },
    {
      name: 'Description ',
      isRequared: false
    }
  ];
  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.dataService
      .getStudents()
      .subscribe(
        students => (this.students = students),
        err => console.error('handle error:', err)
      );
    this.headerItems = Object.keys(this.students[0]).slice(0, 4);
  }

  public changeSortingOrder(property): void {
    this.prop = property;
    this.order = this.order * -1;
  }
  public changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }
}
