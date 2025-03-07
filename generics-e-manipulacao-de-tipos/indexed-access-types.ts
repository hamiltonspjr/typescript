/**
 * Indexed Access Types - Acessar uma propriedade em outro tipo
 */

import { Publication, publication1 } from "./interface-and-types-generics";

const author = publication1["author"];
console.log(author);

type Author = Publication["author"];

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type Person = (typeof MyArray)[number];

const person: Person = { name: "Hamilton", age: 28 };
