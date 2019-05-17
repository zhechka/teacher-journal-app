import { Action } from '@ngrx/store';
import { Student } from '../../common/entities/student';
import { LoadStudents, STUDENTS_ACTION } from '../actions/students.action';

const initialState = [];

export function studentsReducer(state = initialState, action: LoadStudents) {
  switch (action.type) {
    case STUDENTS_ACTION.LOAD_STUDENTS:
      return [...action.payload];
    default:
      return state;
  }
}
