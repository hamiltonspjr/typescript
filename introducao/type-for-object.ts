type Person = { firstName: string; lastName: string };

// interface é possível redeclarar
// link da documentação que fala sobre a diferença entre interface e type: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html?_gl=1*1kktu2m*_ga*NDIyMzY0NzA5LjE3MzE5Mzg5MzI.*_ga_37GXT4VGQK*MTc0MTM1NTg1NC4yMC4xLjE3NDEzNTU4NjYuMC4wLjA.#differences-between-type-aliases-and-interfaces
interface PersonInterface {
  firstName: string;
  lastName: string;
}

function getFullName(person: Person): string {
  return `${person.firstName} ${person.lastName}`;
}
// Structural type system -> Sistema de tipo estrutural
const person = {
  firstName: "Hamilton",
  lastName: "Junior",
  company: "Coffstack",
  age: 28,
};

const fullName = getFullName(person);
console.log(fullName);
