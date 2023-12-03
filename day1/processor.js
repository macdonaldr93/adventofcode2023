export default class Processor {
  constructor(options = {}) {
    this.delimiter = options.delimiter || '\n';
    this.tokenMap = options.tokenMap || {};

    const tokens = Object.keys(this.tokenMap);
    this.regex = new RegExp(['\\d', ...tokens].join('|'), 'g');
  }

  process(input) {
    const lines = input.split(this.delimiter);
    const val = lines.reduce((acc, line) => {
      acc += this.processLine(line);
      return acc;
    }, 0);

    return val;
  }

  processLine(input) {
    const first = this.#findFirstNumber(input);
    const last = this.#findFirstNumber(input, true);
    const val = first + last;

    return parseInt(val);
  }

  #findFirstNumber(input, reverse = false) {
    if (reverse) {
      input = this.#reverseString(input);
    }

    const nums = input.match(this.regex);

    return this.#convertToken(nums[0]) || '';
  }

  #convertToken(token) {
    if (token in this.tokenMap) {
      return this.tokenMap[token];
    } else {
      return token;
    }
  }

  #reverseString(input) {
    return [...input].reverse().join('');
  }
}
