import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subject } from '../../../common/entities/subject';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.sass']
})
export class SubjectFormComponent implements OnInit {
  @Input() nameOfInputs;
  @Output() public changeViewToSubjects: EventEmitter<
    boolean
  > = new EventEmitter();
  @Output() public addNewSubject: EventEmitter<Subject> = new EventEmitter();

  public newSubject: Subject;

  public ngOnInit() {}

  public onSubmit(form: NgForm) {
    const newSubjectWithMarks = { ...form.value, marks: {} };
    this.addNewSubject.emit(newSubjectWithMarks);
    this.changeViewToSubjects.emit(false);
  }
}
