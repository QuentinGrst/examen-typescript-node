import { readFileSync } from 'fs';

interface Person {
  age: number;
  [key: string]: number;
}

interface Statistics {
  meanAge: number;
  meanTaille: number;
}

function getStatistics(): Statistics | null {
  try {
    const persons: Person[] = JSON.parse(
      readFileSync('./persons.json').toString()
    );

    if (
      !persons.length ||
      !Object.hasOwnProperty.call(persons[0], 'age') ||
      !Object.hasOwnProperty.call(persons[0], 'taille')
    ) {
      throw new Error(
        'Les données du fichier persons.json ne sont pas correctement formées.'
      );
    }

    const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
    const totalTaille = persons.reduce((sum, person) => sum + person.taille, 0);

    const meanAge = totalAge / persons.length;
    const meanTaille = totalTaille / persons.length;

    return { meanAge, meanTaille };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("Une erreur inattendue s'est produite.");
    }
    return null;
  }
}

function displayResult() {
  const statistics = getStatistics();

  if (statistics !== null) {
    console.log(statistics);
  } else {
    console.error('Impossible de calculer les statistiques.');
  }
}

displayResult();
