import Processor from './processor';

describe('day 1', () => {
  describe('problem 1', () => {
    const processor = new Processor();

    describe('process()', () => {
      it('returns the example', () => {
        const input = `1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`;

        expect(processor.process(input)).toEqual(142);
      });
    });

    describe('processLine()', () => {
      it('returns the first example', () => {
        const input = '1abc2';

        expect(processor.processLine(input)).toEqual(12);
      });

      it('returns the second example', () => {
        const input = 'pqr3stu8vwx';

        expect(processor.processLine(input)).toEqual(38);
      });

      it('returns the third example', () => {
        const input = 'a1b2c3d4e5f';

        expect(processor.processLine(input)).toEqual(15);
      });

      it('returns the fourth example', () => {
        const input = 'treb7uchet';

        expect(processor.processLine(input)).toEqual(77);
      });
    });
  });

  describe('problem 2', () => {
    const processor = new Processor({
      tokenMap: {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        eno: '1',
        owt: '2',
        eerht: '3',
        ruof: '4',
        evif: '5',
        xis: '6',
        neves: '7',
        thgie: '8',
        enin: '9',
      },
    });

    describe('process()', () => {
      it('returns the example', () => {
        const input = `two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen`;

        expect(processor.process(input)).toEqual(281);
      });
    });

    describe('processLine()', () => {
      it('returns the first example', () => {
        const input = 'two1nine';

        expect(processor.processLine(input)).toEqual(29);
      });

      it('returns the second example', () => {
        const input = 'eightwothree';

        expect(processor.processLine(input)).toEqual(83);
      });

      it('returns the third example', () => {
        const input = 'abcone2threexyz';

        expect(processor.processLine(input)).toEqual(13);
      });

      it('returns the fourth example', () => {
        const input = 'xtwone3four';

        expect(processor.processLine(input)).toEqual(24);
      });

      it('returns the fifth example', () => {
        const input = '4nineeightseven2';

        expect(processor.processLine(input)).toEqual(42);
      });

      it('returns the sixth example', () => {
        const input = 'zoneight234';

        expect(processor.processLine(input)).toEqual(14);
      });

      it('returns the seventh example', () => {
        const input = '7pqrstsixteen';

        expect(processor.processLine(input)).toEqual(76);
      });

      it('returns the numbers that are joined example', () => {
        const input = '7pqrsttwone';

        expect(processor.processLine(input)).toEqual(71);
      });
    });
  });
});
