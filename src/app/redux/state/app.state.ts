import { StudentsState } from './students.state';
import { SubjectsState } from './subjects.state';

export interface AppState {
  studentsPage: StudentsState;
  subjectsPage: SubjectsState;
}
