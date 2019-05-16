import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { Subject } from '../../../common/entities/subject';
import { DataService } from '../../../common/services/data.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.getSubjects();
    this.getStudents();
    this.nameOfSubject = this.route.snapshot.paramMap.get('name');
  }

  public getStudents(): void {
    this.dataService
      .getStudents()
      .subscribe(
        students => (this.students = students),
        err => console.error('handle error:', err)
      );
  }
  public getSubjects(): void {
    this.dataService.getSubjects().subscribe(
      subjects => (
        (this.subject = subjects.find(el => el.subject === this.nameOfSubject)),
        (this.dates = Object.keys(this.subject.marks)),
        (this.teacher = this.subject.teacher),
        (this.marks = this.subject.marks),
        console.log(this.dates)
      ),

      err => console.error('handle error:', err)
    );
  }

  public saveMarksAndTeacherForSubject() {
    this.subject = { ...this.subject, teacher: this.teacher };
    console.log(this.dates);
    this.dataService.addNewMarcsForSubject(this.subject).subscribe();
  }

  public addDate() {
    this.date = new Date().toLocaleDateString('UTC', {
      month: '2-digit',
      day: '2-digit'
    });
    this.dates.includes(this.date)
      ? console.log('you are just have this date')
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
