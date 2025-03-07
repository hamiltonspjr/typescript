/**
 * Generics Constraints - Restrições em generics
 * genéricos mas nem tanto
 */

function logginIdentity<
  Type extends {
    length: number;
  }
>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const value: string = "value";
logginIdentity(value);
