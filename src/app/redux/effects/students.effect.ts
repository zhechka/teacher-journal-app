import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  ActionTypes,
  LoadStudentsSuccess,
  LoadStudentsFail,
  StudentsAction,
  AddStudent,
  AddStudentSuccess,
  AddStudentFail
} from '../actions/students.action';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { DataService } from 'src/app/common/services/data.service';
import { of, Observable } from 'rxjs';

@Injectable()
export class StudentsEffects {
  @Effect()
  public loadStudents$: Observable<StudentsAction> = this.actions$.pipe(
    ofType(ActionTypes.LOAD_STUDENTS),
    mergeMap(() =>
      this.dataService.getStudents().pipe(
        map(students => new LoadStudentsSuccess(students)),
        catchError(error => of(new LoadStudentsFail(error)))
      )
    )
  );

  @Effect()
  public addStudent$: Observable<StudentsAction> = this.actions$.pipe(
    ofType(ActionTypes.ADD_STUDENT),
    map((action: AddStudent) => action.payload),
    mergeMap(student =>
      this.dataService.addNewStudent(student).pipe(
        map(s => new AddStudentSuccess(s)),
        catchError(error => of(new AddStudentFail(error)))
      )
    )
  );

  constructor(private actions$: Actions, private dataService: DataService) {}
}
