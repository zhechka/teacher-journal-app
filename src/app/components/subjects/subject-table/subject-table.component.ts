import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { Subject } from '../../../common/entities/subject';
import { DataService } from '../../../common/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/redux/state/app.state';
import { AddMarks } from 'src/app/redux/actions/subjects.action';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.sass']
})
export class SubjectTableComponent implements OnInit {
  public students: Student[];
  public subject: Subject;
  public nameOfSubject: string;
  public dates: string[];
  public marks: string[];
  public teacher: string;
  public date: string;
  public changed = false;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.nameOfSubject = this.route.snapshot.paramMap.get('name');
    if (!this.students && !this.subject) {
      this.store
        .pipe(select('studentsPage'))
        .subscribe(
          data => (this.students = data.students),
          err => console.error('handle error:', err)
        );
      this.store
        .pipe(select('subjectsPage'))
        .subscribe(
          data => (
            (this.subject = data.subjects.find(
              el => el.subject === this.nameOfSubject
            )),
            (this.dates = Object.keys(this.subject.marks).sort()),
            (this.teacher = this.subject.teacher),
            (this.marks = this.subject.marks)
          ),
          err => console.error('handle error:', err)
        );
    }
  }

  dataChanged() {
    this.changed = true;
  }

  public saveMarksAndTeacherForSubject() {
    this.subject = { ...this.subject, teacher: this.teacher };
    if (this.changed) {
      this.dataService
        .addNewMarcsForSubject(this.subject)
        .subscribe(subject => this.store.dispatch(new AddMarks(subject)));
    }
  }

  public addDate() {
    this.date = new Date().toLocaleDateString('UTC', {
      month: '2-digit',
      day: '2-digit'
    });
    this.dates.includes(this.date)
      ? alert('you already have this date')
      : (this.dates.push(this.date), (this.subject.marks[this.date] = {}));
  }

  public getAverageMark(index) {
    if (!this.marks) {
      return;
    }
    const marks = Object.values(this.marks)
      .reduce((a, b) => {
        a.push(+b[index]);
        return a;
      }, [])
      .filter(Boolean);
    return marks.length === 0
      ? '-'
      : (
          marks.reduce((acc: number, cur: number) => acc + cur) / marks.length
        ).toFixed(1);
  }
}
