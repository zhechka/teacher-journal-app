import { Action } from '@ngrx/store';
import { Student } from '../../common/entities/student';

export enum ActionTypes {
  LOAD_STUDENTS = '[Students] LOAD_STUDENTS',
  ADD_STUDENT = '[Students] ADD_STUDENT'
}

export class LoadStudents implements Action {
  readonly type = ActionTypes.LOAD_STUDENTS;

  constructor(public payload: Student[]) {}
}

export class AddStudent implements Action {
  readonly type = ActionTypes.ADD_STUDENT;

  constructor(public payload: Student) {}
}

export type StudentsAction = LoadStudents | AddStudent;
