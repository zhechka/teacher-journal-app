import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/redux/state/app.state';
import { LoadStudents } from 'src/app/redux/actions/students.action';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.sass']
})
export class StatisticsComponent implements OnInit {
  public data$: Observable<AppState>;
  public data2;

  constructor(
    private dataService: DataService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {}
}
