/**
 * Generics (genéricos) - Capacidade de criar código (função, classe, tipos) que funcionam em uma variedade de tipos ao em vez de apenas um.
 */

// type variable - variavel de tipo
function identity<Type>(arg: Type): Type {
  return arg;
}

const value = identity<number>(10);
const value2 = identity<string>("testando generics");

console.log(value);
console.log(value2);
