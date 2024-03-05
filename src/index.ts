import { readFileSync } from 'fs';

interface Person {
  age: number;
  taille: number;
}

interface Statistics {
  meanAge: number;
  meanTaille: number;
}

function getStatistics(): Statistics {
  const persons: Person[] = JSON.parse(
    readFileSync('./persons.json').toString()
  );

  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const totalTaille = persons.reduce((sum, person) => sum + person.taille, 0);

  const meanAge = totalAge / persons.length;
  const meanTaille = totalTaille / persons.length;

  return { meanAge, meanTaille };
}

function displayResult() {
  console.log(getStatistics());
}

displayResult();
