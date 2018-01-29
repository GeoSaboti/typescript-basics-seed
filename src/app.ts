abstract class Sizes {
  constructor(public sizez: string[]){}

  set availableSizes(sizes: string[]) {
    this.sizez = sizes;
  }

  get availableSizes() {
    return this.sizez;
  }
}

// Solo se puede instanciar mediante una extensión de la calse
new Sizes(['small']);

// Solo se puede instanciar de esta manera
class Pizza extends Sizes{

  public toppings: string[] = [];

  constructor(readonly name: string, public sizes: string[]){
    super(sizes);
  }

  public addTopping (topping: string) {
    this.toppings.push(topping);
  }

}


const pizza = new Pizza('Pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes);
pizza.addTopping('pepperoni');
console.log(pizza.name);
console.log(pizza);
