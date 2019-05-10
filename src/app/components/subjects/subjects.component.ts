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
  public nameOfInputs = [
    {
      name: 'Name',
      isRequared: true
    },
    {
      name: 'Teacher',
      isRequared: true
    },
    {
      name: 'Cabinet',
      isRequared: false
    },
    {
      name: 'Description',
      isRequared: false
    }
  ];
  constructor(private dataService: DataService) {}

  public ngOnInit() {
    this.getSubjects();
  }

  public getSubjects(): void {
    this.subjects = this.dataService.getSubjects();
  }

  public changeViewToSubjects(value: boolean) {
    this.formVisible = value;
  }
}
