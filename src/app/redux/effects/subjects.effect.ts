import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActionTypes,
  LoadSubjectsSuccess,
  LoadSubjectsFail,
  SubjectsAction
} from '../actions/subjects.action';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { DataService } from 'src/app/common/services/data.service';
import { of, Observable } from 'rxjs';

@Injectable()
export class SubjectsEffects {
  @Effect()
  public loadSubjects$: Observable<SubjectsAction> = this.actions$.pipe(
    ofType(ActionTypes.LOAD_SUBJECTS),
    mergeMap(() =>
      this.dataService.getSubjects().pipe(
        map(subjects => new LoadSubjectsSuccess(subjects)),
        catchError(error => of(new LoadSubjectsFail(error)))
      )
    )
  );
  constructor(private actions$: Actions, private dataService: DataService) {}
}
