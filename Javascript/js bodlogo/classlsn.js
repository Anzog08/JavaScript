const array = [1, 5, 7, 9, 2];

let sum = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  sum = sum + array[i];
}
console.log(sum);
