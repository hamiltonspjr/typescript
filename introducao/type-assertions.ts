/**
 * afirmações de tipo
 * palavra "as" - "como"
 * Às vezes, você terá informações sobre o tipo de uma variável que o TypeScript não pode inferir.
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html?_gl=1*g5p0co*_ga*NDIyMzY0NzA5LjE3MzE5Mzg5MzI.*_ga_37GXT4VGQK*MTc0MTM1NTg1NC4yMC4xLjE3NDEzNTc0NTUuMC4wLjA.#type-assertions
 */

type Person = {
  firstName: string;
  lastName: string;
};

const value = {} as Person; // recomendo usar o "as"
// const value = <Person>{};

// Casos de uso
// 1 - algo que acontece em tempo de execução ou fator externo
value.lastName = "Lucas";

// 2 - criando mocks para testes automatizados
