import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../../common/entities/subject';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  public subjects: Subject[];
  public formVisible = false;

  constructor(private dataService: DataService) {}

  getSubjects(): void {
    this.subjects = this.dataService.getSubjects();
  }

  changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }
  ngOnInit() {
    this.getSubjects();
  }
}
