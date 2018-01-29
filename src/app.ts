// ES5
// function Pizza(name: string) {
//   this.name = name;
//   this.topings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//   this.topings.push(topping);
// };

// const pizza = new Pizza('Peperoni');

// pizza.addTopping('pepperroni')

// TypeScript

class Pizza {

  name: string;
  toppings: string[] = [];

  constructor(name: string){}

  addTopping (topping: string) {
    this.toppings.push(topping);
  }

}
