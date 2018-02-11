function sumAll(arr) {
  arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(sum);

function sumAll2(message, ...arr) {
  console.log(message);
  console.log(arguments);
  arr.reduce((prev, next) => prev + next);
}

const sum2 = sumAll2("Hello!", 1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(sum2);
