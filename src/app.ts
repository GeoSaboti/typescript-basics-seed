let pizza: {name: string; price: number; getName(): string};

pizza = {
  name: 'Plain old Pepperoni',
  price: 20,
  getName() {
    return pizza.name;
  }
};

console.log(pizza.getName());
