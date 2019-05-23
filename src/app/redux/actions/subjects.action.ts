import { Action } from '@ngrx/store';
import { Subject } from '../../common/entities/subject';

export enum ActionTypes {
  LOAD_SUBJECTS = '[Subjects] Load Subjects',
  LOAD_SUBJECTS_SUCCESS = '[Subjects] Load Subjects Success',
  LOAD_SUBJECTS_FAIL = '[Subjects] Load Subjects Fail',
  ADD_SUBJECT = '[Subject] ADD_SUBJECT',
  ADD_MARKS = '[Subject] ADD_MARKS'
}

export class LoadSubjects implements Action {
  readonly type = ActionTypes.LOAD_SUBJECTS;
}

export class LoadSubjectsSuccess implements Action {
  readonly type = ActionTypes.LOAD_SUBJECTS_SUCCESS;
  constructor(public payload: Subject[]) {}
}

export class LoadSubjectsFail implements Action {
  readonly type = ActionTypes.LOAD_SUBJECTS_FAIL;
  constructor(public payload: any) {}
}

export class AddSubject implements Action {
  readonly type = ActionTypes.ADD_SUBJECT;
  constructor(public payload: Subject) {}
}

export class AddMarks implements Action {
  readonly type = ActionTypes.ADD_MARKS;
  constructor(public payload: Subject) {}
}

export type SubjectsAction =
  | LoadSubjects
  | LoadSubjectsSuccess
  | LoadSubjectsFail
  | AddSubject
  | AddMarks;
