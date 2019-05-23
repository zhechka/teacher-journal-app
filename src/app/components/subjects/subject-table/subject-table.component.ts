import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { Subject } from '../../../common/entities/subject';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
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
  public data;
  public nameOfSubject: string;
  public dates: string[];
  public newDates: string[] = [];
  public marks: string[];
  public teacher: string;
  public date: string;
  public change = false;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.nameOfSubject = this.route.snapshot.paramMap.get('name');
    this.store.subscribe(data => {
      this.data = data;
      if (data.studentsPage.loaded && data.subjectsPage.loaded) {
        (this.students = data.studentsPage.students),
          (this.subject = data.subjectsPage.subjects.find(
            el => el.subject === this.nameOfSubject
          )),
          (this.dates = Object.keys(this.subject.marks).sort()),
          (this.teacher = this.subject.teacher),
          (this.marks = this.subject.marks);
      }
    });
  }

  dataChanged(newDate, i) {
    const date = newDate.toString().split('/');
    if (date.length === 2 && date[0] < 13 && date[1] < 32) {
      this.newDates[i] = newDate;
    }
  }

  changed() {
    this.change = true;
  }

  public saveMarksAndTeacherForSubject() {
    this.subject = { ...this.subject, teacher: this.teacher };
    if (this.changed) {
      this.newDates.forEach(
        (el, i) => (
          (this.subject.marks[this.newDates[i]] = this.subject.marks[
            this.dates[i]
          ]),
          delete this.subject.marks[this.dates[i]]
        )
      );

      this.store.dispatch(new AddMarks(this.subject));
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
