import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../../common/entities/subject';
import { Student } from '../../../common/entities/student';
import { DataService } from '../../../common/services/data.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/state/app.state';
import { AddSubject } from 'src/app/redux/actions/subjects.action';

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
  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  public ngOnInit() {
    if (!this.subjects) {
      this.store
        .pipe(select('subjectsPage'))
        .subscribe(data => (this.subjects = data.subjects));
    }
  }

  public saveNewSubject(data) {
    const newSubject: Subject = {
      ...data,
      id: this.subjects.length
    };
    console.log(newSubject);
    this.dataService
      .addNewSubject(newSubject)
      .subscribe(subject => this.store.dispatch(new AddSubject(subject)));
  }

  public changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }
}
