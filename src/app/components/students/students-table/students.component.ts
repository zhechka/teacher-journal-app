import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/state/app.state';
import { AddStudent } from 'src/app/redux/actions/students.action';
import { PopUpComponent } from 'src/app/shared/pop-up/pop-up.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass']
})
export class StudentsComponent implements OnInit {
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

  bsModalRef: BsModalRef;
  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService
  ) {}

  public ngOnInit(): void {
    if (!this.students) {
      this.store
        .pipe(select('studentsPage'))
        .subscribe(data => (this.students = data.students));
    }
  }

  showPopup(title: string, message: string) {
    const initialState = {
      message,
      title
    };
    this.bsModalRef = this.modalService.show(PopUpComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  public saveNewStudent(data): void {
    const newStudent: Student = {
      ...data,
      id: this.students.length
    };
    !this.students.some(
      el =>
        el.name.toLowerCase() === newStudent.name.toLowerCase() &&
        el.lastName.toLowerCase() === newStudent.lastName.toLowerCase()
    )
      ? (this.store.dispatch(new AddStudent(newStudent)),
        this.showPopup(
          'success',
          `Student ${newStudent.name} ${newStudent.lastName} successfully added`
        ))
      : this.showPopup(
          'warning',
          `Student ${newStudent.name} ${newStudent.lastName} already exists`
        );
  }

  public changeSortingOrder(property): void {
    this.prop = property.name;
    this.order = -this.order;
  }
  public changeViewToStudents(value: boolean) {
    this.formVisible = value;
  }
}
