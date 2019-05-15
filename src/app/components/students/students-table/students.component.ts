import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { DataService } from '../../../common/services/data.service';

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
      name: 'name',
      isRequared: true
    },
    {
      name: 'lastName',
      isRequared: true
    },
    {
      name: 'address',
      isRequared: false
    },
    {
      name: 'about',
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
        students => (
          (this.students = students),
          console.log(students),
          (this.headerItems = Object.keys(this.students[0]).slice(1, 5))
        ),
        err => console.error('handle error:', err)
      );
  }

  public saveNewStudent(data) {
    this.dataService.addNewStudent(data).subscribe();
  }

  public changeSortingOrder(property): void {
    this.prop = property;
    this.order = -this.order;
  }
  public changeViewToStudents(value: boolean) {
    this.formVisible = value;
  }
}
