import { StudentsAction, ActionTypes } from '../actions/students.action';
import { StudentsState } from '../state/students.state';

const initialStudentsState: StudentsState = {
  students: []
};

export function studentsReducer(
  state = initialStudentsState,
  action: StudentsAction
) {
  switch (action.type) {
    case ActionTypes.LOAD_STUDENTS:
      return {
        ...state,
        students: [...action.payload]
      };

    case ActionTypes.ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload]
      };
    default:
      return state;
  }
}
