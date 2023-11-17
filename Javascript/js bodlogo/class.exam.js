const a = [5, 2, 6, 11, 1, 0];

for (let i = 0; i < a.length; i++) {
  for (let k = i; k < a.length; k++) {
    if (a[k] < a[i]) {
      let temp = a[k];
      a[k] = a[i];
      a[i] = temp;
    }
  }
}
console.log(a, "өгсөх эрэмбээр байрлуул");
