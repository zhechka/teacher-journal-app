import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActionTypes,
  LoadSubjectsSuccess,
  LoadSubjectsFail,
  SubjectsAction,
  AddSubject,
  AddSubjectSuccess,
  AddSubjectFail,
  AddMarks,
  AddMarksSuccess,
  AddMarksFail
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

  @Effect()
  public addSubject$: Observable<SubjectsAction> = this.actions$.pipe(
    ofType(ActionTypes.ADD_SUBJECT),
    map((action: AddSubject) => action.payload),
    mergeMap(subject =>
      this.dataService.addNewSubject(subject).pipe(
        map(s => new AddSubjectSuccess(s)),
        catchError(error => of(new AddSubjectFail(error)))
      )
    )
  );

  @Effect()
  public addMarks$: Observable<SubjectsAction> = this.actions$.pipe(
    ofType(ActionTypes.ADD_MARKS),
    map((action: AddMarks) => action.payload),
    mergeMap(subject =>
      this.dataService.addNewMarcsForSubject(subject).pipe(
        map(s => new AddMarksSuccess(s)),
        catchError(error => of(new AddMarksFail(error)))
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
