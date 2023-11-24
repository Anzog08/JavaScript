const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const input = document.getElementById("input");
let counter = parseInt(input.value);
const adder = (param) => {
  param = param + 1;
  return param;
};
const reducer = (param) => {
  param = param - 1;
  return param;
};
const logger = () => {
  console.log(counter);
};
plusButton.addEventListener("click", (event) => {
  const result = adder(counter);
  counter = result;
  input.value = result;
});
minusButton.addEventListener("click", () => {
  const result = reducer(counter);
  counter = result;
  input.value = result;
});
input.addEventListener("change", (event) => {
  console.log(input.style.width);
});
