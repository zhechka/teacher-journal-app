import { Action } from '@ngrx/store';
import { Student } from '../../common/entities/student';

// tslint:disable-next-line:no-namespace
export namespace STUDENTS_ACTION {
  export const LOAD_STUDENTS = 'LOAD_STUDENTS';
}

export class LoadStudents implements Action {
  readonly type = STUDENTS_ACTION.LOAD_STUDENTS;

  constructor(public payload: Student[]) {}
}

export type StudentsAction = LoadStudents;
