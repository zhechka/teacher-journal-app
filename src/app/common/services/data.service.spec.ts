import { DataService } from './data.service';
import { Student } from '../entities/student';
import { of } from 'rxjs';
import { Subject } from '../entities/subject';

let httpClientSpy: { get: jasmine.Spy };
let dataService: DataService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  dataService = new DataService(httpClientSpy as any);
});

it('should return expected students', () => {
  const expectedStudents: Student[] = [
    {
      name: 'Yauhen',
      lastName: 'Voronin',
      address: '220000',
      about: 'work hard',
      index: 'vhdan3098',
      id: 0
    },
    {
      id: 1,
      index: '1qfn6qfo4',
      name: 'Adela',
      lastName: 'Mullen',
      address: '178 Duryea Place',
      about: 'excepteur voluptate nostrud'
    }
  ];
  httpClientSpy.get.and.returnValue(of(expectedStudents));
  dataService
    .getStudents()
    .subscribe(
      students =>
        expect(students).toEqual(expectedStudents, 'expected students'),
      fail
    );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});

it('should return expected subjects', () => {
  const expectedSubjects: Subject[] = [
    {
      subject: 'physics',
      teacher: 'Y. Zhdanov',
      cabinet: 2,
      description: 'good',
      marks: {
        '05/16': {
          '1qfn6qfo4': 9,
          v8i2k6x8c: 9,
          vn1ir6fuh: 9,
          ff0843eyy: 8,
          '4jhrglo31': 8,
          vhdan3098: 1,
          d3mqfs013: 8
        },
        '05/20': {
          vhdan3098: 1,
          d3mqfs013: 10
        },
        '05/27': {
          vhdan3098: 6,
          '1qfn6qfo4': 6,
          v8i2k6x8c: 6
        }
      },
      id: 3
    },
    {
      subject: 'literature',
      teacher: 'Ivanova123',
      cabinet: 333,
      description: 'gogo Pushkin',
      marks: {
        '05/21': {
          vhdan3098: 10,
          '1qfn6qfo4': 10,
          v8i2k6x8c: 10,
          vn1ir6fuh: 3,
          ff0843eyy: null,
          '4jhrglo31': null
        },
        '05/23': {
          vhdan3098: 4,
          '1qfn6qfo4': 4,
          v8i2k6x8c: 4
        },
        '05/27': {}
      },
      id: 4
    }
  ];
  httpClientSpy.get.and.returnValue(of(expectedSubjects));
  dataService
    .getSubjects()
    .subscribe(
      Subjects =>
        expect(Subjects).toEqual(expectedSubjects, 'expected Subjects'),
      fail
    );
  expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
});
