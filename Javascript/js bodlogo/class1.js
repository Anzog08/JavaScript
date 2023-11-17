const a = [3, 7, 1, 11, 0];
for (let i = 0; i < a.length; i++) {
  for (let l = i + 1; l < a.length; l++) {
    if (a[i] > a[l]) {
      let b = a[i];
      let c = a[l];
      b = a[l];
      c = a[i];
    }
  }
}
console.log(a);
