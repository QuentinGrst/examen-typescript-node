import { readFileSync } from 'fs';

interface Person {
  age: number;
  height: number;
}

function getStatistics(): number {
  const persons: Person[] = JSON.parse(
    readFileSync('./persons.json').toString()
  );

  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / persons.length;

  return averageAge;
}

function displayResult() {
  console.log(getStatistics());
}

displayResult();
