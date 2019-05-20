import { SubjectsState } from '../state/subjects.state';
import { SubjectsAction, ActionTypes } from '../actions/subjects.action';

const initialSubjectsState: SubjectsState = {
  subjects: []
};

export function subjectsReducer(
  state = initialSubjectsState,
  action: SubjectsAction
) {
  switch (action.type) {
    case ActionTypes.LOAD_SUBJECTS:
      return {
        ...state,
        subjects: [...action.payload]
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
