/**
 * Keyof Type Operator - Produz um novo tipo a partir da união das chaves
 */

import { lucas, publication1, User } from "./interface-and-types-generics";

// const email = lucas["email"];
// console.log(email);

// type UserKey = "firstName" | "lastName" | "email";
// function getProperty(user: User, key: keyof User) {
//   return user[key];
// }

// transformando a função em genérica
function getProperty<T, key extends keyof T>(value: T, key: key): T[key] {
  return value[key];
}
const value = getProperty(publication1, "author");
