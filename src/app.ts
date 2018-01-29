let sumOrder2: (price: number, quantity?: number) => number;

sumOrder2 = (x, y) => {
  if (y) {
    return x * y;
  }
  return x;
};

const sum2 = sumOrder2(25);

console.log(`Totalsum: ${sum2}`);
