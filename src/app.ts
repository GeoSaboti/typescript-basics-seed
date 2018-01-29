interface Pizza {
  name: string;
  sizes: string[];
  getAvailableSizez(): string[];
};

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizez() {
      return this.sizes
    }
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
