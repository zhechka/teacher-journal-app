import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/state/app.state';

import { LoadStudents } from '../redux/actions/students.action';
import { LoadSubjects } from '../redux/actions/subjects.action';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Teacher Journal';

  constructor(
    private router: Router,
    private store: Store<AppState>,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  ngOnInit() {
    this.store.dispatch(new LoadStudents());
    this.store.dispatch(new LoadSubjects());
  }
}
