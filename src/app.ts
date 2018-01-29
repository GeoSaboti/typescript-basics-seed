// function sumOrder (price: number, quantity: number): number {
//   return price * quantity;
// }

let sumOrder = (price: number, quantity: number): number => {
  return price * quantity;
};

const sum = sumOrder(12, 2);

console.log(`Totalsum: ${sum}`);

let sumOrder2: (price: number, quantity: number) => number;

sumOrder2 = (x, y) => x * y;

const sum2 = sumOrder2(25, 2);

console.log(`Totalsum: ${sum2}`);
