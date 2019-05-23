import { Action } from '@ngrx/store';
import { Subject } from '../../common/entities/subject';

export enum ActionTypes {
  LOAD_SUBJECTS = '[Subjects] Load Subjects',
  LOAD_SUBJECTS_SUCCESS = '[Subjects] Load Subjects Success',
  LOAD_SUBJECTS_FAIL = '[Subjects] Load Subjects Fail',
  ADD_SUBJECT = '[Subject] Add Subject',
  ADD_SUBJECT_SUCCESS = '[Subject] Add Subject Success',
  ADD_SUBJECT_FAIL = '[Subject] Add Subject Fail',
  ADD_MARKS = '[Subject] Add Marks',
  ADD_MARKS_SUCCESS = '[Subject] Add Marks Success',
  ADD_MARKS_FAIL = '[Subject] Add Marks Fail'
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

export class AddSubjectSuccess implements Action {
  readonly type = ActionTypes.ADD_SUBJECT_SUCCESS;
  constructor(public payload: Subject) {}
}

export class AddSubjectFail implements Action {
  readonly type = ActionTypes.ADD_SUBJECT_FAIL;
  constructor(public payload: any) {}
}

export class AddMarks implements Action {
  readonly type = ActionTypes.ADD_MARKS;
  constructor(public payload: Subject) {}
}
export class AddMarksSuccess implements Action {
  readonly type = ActionTypes.ADD_MARKS_SUCCESS;
  constructor(public payload: Subject) {}
}

export class AddMarksFail implements Action {
  readonly type = ActionTypes.ADD_MARKS_FAIL;
  constructor(public payload: any) {}
}

export type SubjectsAction =
  | LoadSubjects
  | LoadSubjectsSuccess
  | LoadSubjectsFail
  | AddSubject
  | AddSubjectSuccess
  | AddSubjectFail
  | AddMarks
  | AddMarksSuccess
  | AddMarksFail;
