import fs from 'fs';

function main() {
  // Input
  const inputFile = new URL('input.txt', import.meta.url);
  const input = fs.readFileSync(inputFile, 'utf-8').trim();

  // Problem 2
  const lines = input.split('\n');

  let total = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    total += processLine(line);
  }

  console.log(`🎉 The answer is ${total}`);
}

main();

// Private

/**
 *
 * @param {string} line - The line to process
 * @returns {number} - The game id, or zero if not possible
 */
export function processLine(line) {
  const bag = { red: 0, blue: 0, green: 0 };
  const [_, gameplay] = line.split(': ');
  const rounds = gameplay.split('; ');

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];
    const draws = round.split(', ');

    for (let j = 0; j < draws.length; j++) {
      const draw = draws[j];
      const [numberString, colour] = draw.split(' ');
      const number = parseInt(numberString, 10);

      if (number > bag[colour]) {
        bag[colour] = number;
      }
    }
  }

  return Object.values(bag).reduce((acc, num) => {
    acc *= num;
    return acc;
  }, 1);
}
