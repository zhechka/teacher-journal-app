import { SubjectsState } from '../state/subjects.state';
import { SubjectsAction, ActionTypes } from '../actions/subjects.action';

const initialSubjectsState: SubjectsState = {
  subjects: [],
  loaded: false,
  loading: false
};

export function subjectsReducer(
  state = initialSubjectsState,
  action: SubjectsAction
): SubjectsState {
  switch (action.type) {
    case ActionTypes.LOAD_SUBJECTS:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.LOAD_SUBJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        subjects: [...action.payload]
      };
    case ActionTypes.LOAD_SUBJECTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };
    case ActionTypes.ADD_SUBJECT:
      return {
        ...state,
        subjects: [...state.subjects, action.payload]
      };
    case ActionTypes.ADD_MARKS:
      return {
        ...state,
        subjects: [
          ...state.subjects.filter(el => el.subject !== action.payload.subject),
          action.payload
        ]
      };
    default:
      return state;
  }
}
