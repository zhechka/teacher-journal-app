import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Student } from '../../../common/entities/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.sass']
})
export class StudentFormComponent implements OnInit {
  @Input() nameOfInputs;
  @Output() public changeViewToStudents: EventEmitter<
    boolean
  > = new EventEmitter();
  @Output() public addNewStudent: EventEmitter<Student> = new EventEmitter();
  public newStudentwithIndex: Student;
  constructor() {}

  ngOnInit() {}

  public onSubmit(form: NgForm) {
    this.newStudentwithIndex = {
      ...form.value,
      index: Math.random()
        .toString(36)
        .substr(2, 9)
    };
    console.log(this.newStudentwithIndex);
    this.addNewStudent.emit(this.newStudentwithIndex);
    this.changeViewToStudents.emit(false);
  }
}
