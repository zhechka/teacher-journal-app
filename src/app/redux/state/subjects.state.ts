import { Subject } from '../../common/entities/subject';

export interface SubjectsState {
  subjects: Subject[];
  loaded: boolean;
  loading: boolean;
}
