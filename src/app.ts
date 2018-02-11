const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You get a discount!`);
} else {
  console.log(`Order 3 or more pizzas for a discount`);
}
