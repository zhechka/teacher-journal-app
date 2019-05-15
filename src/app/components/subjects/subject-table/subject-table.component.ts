import { Component, OnInit } from '@angular/core';
import { Student } from '../../../common/entities/student';
import { DataService } from '../../../common/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-table',
  templateUrl: './subject-table.component.html',
  styleUrls: ['./subject-table.component.sass']
})
export class SubjectTableComponent implements OnInit {
  public students: Student[];
  public headerItems: string[] = [
    'Name',
    'Last Name',
    'Average Mark',
    '04/02',
    '05/02',
    '06/02',
    '07/02'
  ];
  public date = this.headerItems.slice(3);
  public subject: string;
  public teacher: string;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  public ngOnInit(): void {
    this.getStudents();
    this.getSubject();
  }

  public getSubject(): void {
    this.subject = this.route.snapshot.paramMap.get('name');
  }

  public getStudents(): void {
    this.dataService.getStudents().subscribe(
      students => (
        (this.students = students.map(el => ({
          id: el.id,
          name: el.name,
          lastName: el.lastName,
          teacher: el.subjects.find(element => element.subject === this.subject)
            .teacher,
          marks: el.subjects.find(element => element.subject === this.subject)
            .marks
        }))),
        (this.teacher = this.students[0].teacher),
        console.log(this.students)
      ),
      err => console.error('handle error:', err)
    );
  }

  public getAverageMark(objOfMarks): string {
    const marks: any[] = Object.values(objOfMarks).filter(Boolean);
    return marks.length === 0
      ? '-'
      : (
          marks.reduce((acc: number, cur: number) => acc + cur) / marks.length
        ).toFixed(1);
  }
}
