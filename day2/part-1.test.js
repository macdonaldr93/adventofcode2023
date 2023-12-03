import { processLine } from './main';

describe('problem 1', () => {
  const BAG = {
    red: 12,
    green: 13,
    blue: 14,
  };

  it('returns the game id for line 1', () => {
    const line = 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green';

    expect(processLine(line, BAG)).toEqual(1);
  });

  it('returns the game id for line 2', () => {
    const line =
      'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue';

    expect(processLine(line, BAG)).toEqual(2);
  });

  it('returns zero for line 3', () => {
    const line =
      'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';

    expect(processLine(line, BAG)).toEqual(0);
  });

  it('returns zero for line 4', () => {
    const line =
      'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red';

    expect(processLine(line, BAG)).toEqual(0);
  });

  it('returns the game id for line 5', () => {
    const line = 'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green';

    expect(processLine(line, BAG)).toEqual(5);
  });
});
