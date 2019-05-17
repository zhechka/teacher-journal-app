import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { DataService } from '../../../common/services/data.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/state/app.state';
import { LoadStudents } from 'src/app/redux/actions/students.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  public headerItems: string[];
  public formVisible = false;
  public order = 1;
  public prop: string;
  public students: Student[];
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
  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.store
      .pipe(select('students'))
      .subscribe(
        students => (
          console.log(students),
          (this.students = students),
          (this.headerItems = Object.keys(this.students[0]).slice(2, 6))
        )
      );
  }

  public saveNewStudent(data) {
    this.dataService.addNewStudent(data).subscribe((student: Student) => {
      this.students.push(student);
    });
  }

  public changeSortingOrder(property): void {
    this.prop = property;
    this.order = -this.order;
  }
  public changeViewToStudents(value: boolean) {
    this.formVisible = value;
  }
}
