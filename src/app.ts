const date = Date.now();

console.log(date);

class Coupon {
  static allowed = ['Pepperoni', 'Blazing Inferno'];
  static create(percentage: number) {
    return `PIZZA_RESTAURANT-${percentage}`;
  }
}

Coupon.allowed.push('Margaritha');
Coupon.create(25);
