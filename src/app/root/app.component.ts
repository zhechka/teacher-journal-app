import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../redux/state/app.state';
import { Student } from '../common/entities/student';

import { DataService } from '../common/services/data.service';
import { LoadStudents } from '../redux/actions/students.action';
import { LoadSubjects } from '../redux/actions/subjects.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Teacher Journal';

  constructor(
    private router: Router,
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.dataService
      .getStudents()
      .subscribe(students => this.store.dispatch(new LoadStudents(students)));
    this.dataService
      .getSubjects()
      .subscribe(subjects => this.store.dispatch(new LoadSubjects(subjects)));
  }
}
