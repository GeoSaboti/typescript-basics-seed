const coupon: string = 'pizza25';

function normalizaeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizaeCoupon(coupon)}`;

console.log(couponMessage);
