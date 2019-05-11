import { Component, OnInit } from '@angular/core';
import { Student } from '../../common/entities/student';
import { DataService } from '../../common/services/data.service';

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
  public subject = 'mathematics';
  public teacher: string;
  constructor(private dataService: DataService) {}

  public ngOnInit(): void {
    this.getStudents();
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
        (this.teacher = this.students[0]['teacher'])
      ),
      err => console.error('handle error:', err)
    );
  }
}
