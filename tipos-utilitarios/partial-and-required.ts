type User = {
  id: string;
  name: string;
  email: string;
};

/**
 * Partial - Torna todas as propriedades de um tipo opcionais
 * Required - Torna todas as propriedades de um tipo obrigatórias
 */

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const hamilton: User = {
  id: "1",
  name: "Hamilton",
  email: "hamilton@gmail.com",
};

const updated = updateUser(hamilton, {});
console.log(updated);
