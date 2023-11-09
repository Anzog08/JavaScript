const array = [1, 5, 7, 9, 2];

let max = 0;

for (let i = 0; i < array.length; i++) {
  if (max <= array[i]) {
    max = array[i];
  }
}
console.log(max);
