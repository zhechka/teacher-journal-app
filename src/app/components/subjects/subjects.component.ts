import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../common/entities/subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  @Input() subjects: Subject[];

  public formVisible: boolean = false;

  changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }

  constructor() {}

  ngOnInit() {}
}
