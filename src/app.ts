abstract class Sizes {
  constructor(protected sizes: string[]){}

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }
}

// Solo se puede instanciar mediante una extensión de la calse
// new Sizes(['small']);

// Solo se puede instanciar de esta manera
class Pizza extends Sizes{

  public toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]){
    super(sizes);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  public addTopping (topping: string) {
    this.toppings.push(topping);
  }

}


const pizza = new Pizza('Pepperoni', ['small', 'medium']);
console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);
