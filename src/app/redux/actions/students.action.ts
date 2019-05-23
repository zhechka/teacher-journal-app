import { Action } from '@ngrx/store';
import { Student } from '../../common/entities/student';

export enum ActionTypes {
  LOAD_STUDENTS = '[Students] Load Students',
  LOAD_STUDENTS_FAIL = '[Students] Load Students Fail',
  LOAD_STUDENTS_SUCCESS = '[Students] Load Students Success',
  ADD_STUDENT = '[Students] Add Student',
  ADD_STUDENT_SUCCESS = '[Students] Add Student Success',
  ADD_STUDENT_FAIL = '[Students] Add Student Fail'
}

export class LoadStudents implements Action {
  readonly type = ActionTypes.LOAD_STUDENTS;
}

export class LoadStudentsSuccess implements Action {
  readonly type = ActionTypes.LOAD_STUDENTS_SUCCESS;
  constructor(public payload: Student[]) {}
}

export class LoadStudentsFail implements Action {
  readonly type = ActionTypes.LOAD_STUDENTS_FAIL;
  constructor(public payload: any) {}
}

export class AddStudent implements Action {
  readonly type = ActionTypes.ADD_STUDENT;
  constructor(public payload: Student) {}
}

export class AddStudentSuccess implements Action {
  readonly type = ActionTypes.ADD_STUDENT_SUCCESS;
  constructor(public payload: Student) {}
}

export class AddStudentFail implements Action {
  readonly type = ActionTypes.ADD_STUDENT_FAIL;
  constructor(public payload: any) {}
}

export type StudentsAction =
  | LoadStudents
  | LoadStudentsFail
  | LoadStudentsSuccess
  | AddStudent
  | AddStudentSuccess
  | AddStudentFail;
