import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../../common/entities/subject';
import { Student } from '../../../common/entities/student';
import { DataService } from '../../../common/services/data.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[];
  public formVisible = false;
  public data: Student[];
  public newSubject;
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
  constructor(private dataService: DataService) {}

  public ngOnInit() {
    this.getSubjects();
  }

  public getSubjects(): void {
    this.dataService
      .getSubjects()
      .subscribe(
        data => ((this.subjects = data[0].subjects), (this.data = data)),
        err => console.error('handle error:', err)
      );
  }

  public saveNewSubject(data) {
    this.newSubject = this.data.map(el => ({
      ...el,
      subjects: [...el.subjects, data]
    }));
    this.dataService.addNewSubject(this.newSubject).subscribe();
  }

  public changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }
}
