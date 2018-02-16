let selectedTopping: string = "pep";

function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping("bacon");

console.log(selectedTopping);
