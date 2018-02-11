const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calcPrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calcPrice(pizzaCost, pizzaToppings);
console.log(`The pizza costs ${cost}`);
