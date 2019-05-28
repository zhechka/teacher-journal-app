import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../../common/entities/subject';
import { Student } from '../../../common/entities/student';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/state/app.state';
import { AddSubject } from 'src/app/redux/actions/subjects.action';
import { PopUpComponent } from 'src/app/shared/pop-up/pop-up.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[];
  public formVisible = false;
  public data: Student[];
  public nameOfInputs = [
    {
      name: 'subject',
      isRequared: true
    },
    {
      name: 'teacher',
      isRequared: true
    },
    {
      name: 'cabinet',
      isRequared: false
    },
    {
      name: 'description',
      isRequared: false
    }
  ];
  bsModalRef: BsModalRef;
  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService
  ) {}

  public ngOnInit() {
    if (!this.subjects) {
      this.store
        .pipe(select('subjectsPage'))
        .subscribe(data => (this.subjects = data.subjects));
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

  public saveNewSubject(data) {
    const newSubject: Subject = {
      ...data,
      id: this.subjects.length
    };
    !this.subjects.some(
      el => el.subject.toLowerCase() === newSubject.subject.toLowerCase()
    )
      ? (this.store.dispatch(new AddSubject(newSubject)),
        this.showPopup(
          'success',
          `Subject ${newSubject.subject} successfully added`
        ))
      : this.showPopup(
          'warning',
          `Subject ${newSubject.subject} already exists`
        );
  }

  public changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }
}
