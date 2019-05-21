import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { DataService } from '../../../common/services/data.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/state/app.state';
import {
  LoadStudents,
  AddStudent
} from 'src/app/redux/actions/students.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
  public headerItems = ['name', 'lastName', 'address', 'about'];
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
    if (!this.students) {
      this.store
        .pipe(select('studentsPage'))
        .subscribe(data => (this.students = data.students));
    }
  }

  public saveNewStudent(data): void {
    const newStudent = {
      ...data,
      id: this.students.length
    };
    !this.students.some(
      el =>
        el.name.toLowerCase() === newStudent.name.toLowerCase() &&
        el.lastName.toLowerCase() === newStudent.lastName.toLowerCase()
    )
      ? this.dataService
          .addNewStudent(newStudent)
          .subscribe(student => this.store.dispatch(new AddStudent(student)))
      : alert('You already have this student');
  }

  public changeSortingOrder(property): void {
    this.prop = property;
    this.order = -this.order;
  }
  public changeViewToStudents(value: boolean) {
    this.formVisible = value;
  }
}
