import fs from 'fs';
import Processor from './processor.js';

function main() {
  // Input
  const inputFile = new URL('input.txt', import.meta.url);
  const input = fs.readFileSync(inputFile, 'utf-8').trim();

  // Problem 1
  const p1 = new Processor();
  const a1 = p1.process(input);

  // Problem 2
  const p2 = new Processor({
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
  const a2 = p2.process(input);

  // Output
  console.log(`🎉 The answer 1 is ${a1}`);
  console.log(`🎉 The answer 2 is ${a2}`);
}

main();
