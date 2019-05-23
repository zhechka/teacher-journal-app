import { StudentsAction, ActionTypes } from '../actions/students.action';
import { StudentsState } from '../state/students.state';

const initialStudentsState: StudentsState = {
  students: [],
  loaded: false,
  loading: false
};

export function studentsReducer(
  state = initialStudentsState,
  action: StudentsAction
): StudentsState {
  switch (action.type) {
    case ActionTypes.LOAD_STUDENTS:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.LOAD_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        students: [...action.payload]
      };
    case ActionTypes.LOAD_STUDENTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case ActionTypes.ADD_STUDENT:
      return {
        ...state
      };
    case ActionTypes.ADD_STUDENT_SUCCESS:
      const student = action.payload;
      return {
        ...state,

        students: [...state.students, student]
      };
    case ActionTypes.ADD_STUDENT_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
