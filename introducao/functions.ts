function sum(value1: number, value2: number, flag?: boolean): number {
  if (flag) {
    return value1 + value2;
  } else {
    return 0;
  }
}

const total = sum(10, 20, true);

console.log("Total: ", total);
