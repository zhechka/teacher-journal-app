import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { studentsReducer } from './students.reducer';
import { subjectsReducer } from './subjects.reducer';

export const reducers: ActionReducerMap<AppState> = {
  studentsPage: studentsReducer,
  subjectsPage: subjectsReducer
};
