let n = 5;

let multi = 1;

for (let i = 1; i < n; i++) {
  if (i % 2 == 0) {
    multi = multi * i;
  }
}
console.log(multi, "multi");
