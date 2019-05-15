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
  public headerItems: string[] = ['Name', 'Last Name', 'Average Mark'];
  public subject: Subject;
  public nameOfSubject: string;
  public dates: string[];
  public marks: string[];
  public teacher: string;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.getSubjects();
    this.getStudents();
    this.nameOfSubject = this.route.snapshot.paramMap.get('name');
  }

  public con() {
    console.log(this.subject);
    this.subject = {
      ...this.subject,
      marks: { ...this.subject.marks, '11/02': '' }
    };
    this.headerItems.push('11/02');
    this.dates.push('11/02');
    console.log(this);
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
        this.headerItems.push(...this.dates),
        (this.teacher = this.subject.teacher),
        (this.marks = this.subject.marks)
      ),

      err => console.error('handle error:', err)
    );
  }

  public getAverageMark(index) {
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
