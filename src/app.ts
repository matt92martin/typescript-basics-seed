const pizza = {
  name: "Pepperoni",
  toppings: ["pepperoni"]
};

function order({ name: pizzaName, toppings: pizzaToppings }) {
  return { pizzaName, pizzaToppings };
}

const { pizzaName: name } = order(pizza);

console.log(name);

const toppings = ["pep", "bacon", "chili", "cheese"];

const [first, second, third] = toppings;

console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}

logToppings(toppings);
