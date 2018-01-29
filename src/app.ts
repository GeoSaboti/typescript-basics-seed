let sumOrder2: (price: number, quantity?: number) => number;

sumOrder2 = (x, y = 1) => {
  return x * y;
};

const sum2 = sumOrder2(25);

console.log(`Totalsum: ${sum2}`);
