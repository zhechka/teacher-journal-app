import { SortPipe } from './sort.pipe';

describe('sortPipe', () => {
  const pipe = new SortPipe();
  const arr = [
    {
      id: 5,
      index: 'vn1ir6fuh',
      name: 'Oliver',
      lastName: 'Decker',
      address: '438 Everit Street',
      about: 'exercitation elit laboris'
    },
    {
      id: 4,
      index: 'ff0843eyy',
      name: 'Earnestine',
      lastName: 'Christian',
      address: '242 Lancaster Avenue',
      about: 'aute do deserunt'
    },
    {
      id: 3,
      index: '4jhrglo31',
      name: 'Terra',
      lastName: 'Wilder',
      address: '557 Emerald Street',
      about: 'adipisicing est id'
    }
  ];
  it('should sort by number', () => {
    expect(
      pipe
        .transform(arr, 'id', 1)
        .map(e => e.id)
        .reduce((a, b) => a + b, '')
    ).toBe(
      arr
        .sort((a, b) => a.id - b.id)
        .map(e => e.id)
        .reduce((a, b) => a + b, '')
    );
  });
  it('should sort by string', () => {
    expect(
      pipe
        .transform(arr, 'name', 1)
        .map(e => e.name)
        .reduce((a, b) => a + b, '')
    ).toBe(
      arr
        .map(e => e.name)
        .sort()
        .reduce((a, b) => a + b, '')
    );
  });
  it('should return itself if arr equals undefuned', () => {
    expect(pipe.transform(undefined, 'name', 1)).toBe(undefined);
  });
});
