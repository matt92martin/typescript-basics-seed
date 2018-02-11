const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map(({ name }) => name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
  name: "Blazing Inferno",
  getName: () => pizza.name
};

console.log(pizza.getName());
