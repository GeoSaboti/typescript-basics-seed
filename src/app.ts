class Sizes {
  constructor(public sizez: string[]){}

  set availableSizes(sizes: string[]) {
    this.sizez = sizes;
  }

  get availableSizes() {
    return this.sizez;
  }
}

const sizes = new Sizes(['small', 'medium']);
// Invoke getter
console.log(sizes.availableSizes);
// Invoke setter
sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes);


class Pizza {

  public toppings: string[] = [];

  constructor(readonly name: string){}

  public addTopping (topping: string) {
    this.toppings.push(topping);
  }

}


const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');
console.log(pizza.name);
console.log(pizza);
