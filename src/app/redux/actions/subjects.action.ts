import { Action } from '@ngrx/store';
import { Subject } from '../../common/entities/subject';

export enum ActionTypes {
  LOAD_SUBJECTS = '[Subjects] LOAD_SUBJECTS',
  ADD_SUBJECT = '[Subject] ADD_SUBJECT',
  ADD_MARKS = '[Subject] ADD_MARKS'
}

export class LoadSubjects implements Action {
  readonly type = ActionTypes.LOAD_SUBJECTS;

  constructor(public payload: Subject[]) {}
}

export class AddSubject implements Action {
  readonly type = ActionTypes.ADD_SUBJECT;
  constructor(public payload: Subject) {}
}

export class AddMarks implements Action {
  readonly type = ActionTypes.ADD_MARKS;
  constructor(public payload: Subject) {}
}

export type SubjectsAction = LoadSubjects | AddSubject | AddMarks;
