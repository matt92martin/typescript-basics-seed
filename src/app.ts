let pizzaSize: number = 2;

function selectSize(size: 1 | 2 | 3): void {
  pizzaSize = size;
}

selectSize(1);

console.log(`Pizza Size: ${pizzaSize}`);
