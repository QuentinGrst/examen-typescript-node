import { readFileSync } from 'fs';

interface Person {
  age: number;
  height: number;
}

function getStatistics(): number {
  const persons: Person[] = JSON.parse(
    readFileSync('./persons.json').toString()
  );

  const maxAge = Math.max(...persons.map((person) => person.age));

  return maxAge;
}

function displayResult() {
  console.log(getStatistics());
}

displayResult();
