import { Student } from '../../common/entities/student';

export interface StudentsState {
  students: Student[];
  loaded: boolean;
  loading: boolean;
}
