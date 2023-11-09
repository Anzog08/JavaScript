const array = [1, 5, 7, 9, 2];

let dund = 0;

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  dund = dund + array[i] / 2;
}
console.log(dund);
