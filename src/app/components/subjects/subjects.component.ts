import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../common/entities/subject';
import { data } from '../../common/constants/mock-data';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = data[0].subjects;
  public formVisible: boolean = false;

  changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }

  constructor() {}

  ngOnInit() {}
}
