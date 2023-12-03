import fs from 'fs';

export function main() {
  // Input
  const inputFile = new URL('input.txt', import.meta.url);
  const input = fs.readFileSync(inputFile, 'utf-8').trim();

  // Problem 1
  const BAG = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const lines = input.split('\n');

  let total = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    total += processLine(line, BAG);
  }

  console.log(`🎉 The answer is ${total}`);
}

main();

// Private

/**
 *
 * @param {string} line - The line to process
 * @param {Record<string, number>} bag - The possible bag configuration
 * @returns {number} - The game id, or zero if not possible
 */
export function processLine(line, bag) {
  const [title, gameplay] = line.split(': ');
  const rounds = gameplay.split('; ');

  let possible = true;

  for (let i = 0; i < rounds.length; i++) {
    const round = rounds[i];
    const draws = round.split(', ');

    for (let j = 0; j < draws.length; j++) {
      const draw = draws[j];
      const [numberString, colour] = draw.split(' ');
      const number = parseInt(numberString, 10);

      if (bag[colour] < number) {
        possible = false;
        break;
      }
    }

    if (!possible) {
      break;
    }
  }

  if (possible) {
    return getGameId(title);
  } else {
    return 0;
  }
}

function getGameId(title) {
  const regex = /\d+/g;
  const values = title.match(regex); // ['1', '0']
  const value = values.join(''); // '10'

  return parseInt(value, 10); // 10
}
