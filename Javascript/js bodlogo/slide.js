const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resetButton = document.getElementById("reset");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");

let redNum = input1.value;
let blueNum = input2.value;
const sum = input1.value + input2.value;
let result = "";
let redwidth = 50;
let bluewidth = 50;
redButton.style = `width:${redwidth}%`;
blueButton.style = `width:${bluewidth}%`;

const redClicked = (param) => {
  param++;
  return param;
};
const blueClicked = (param) => {
  param++;
  return param;
};
const redClickedblue = (param) => {
  param--;
  return param;
};
const blueClickedred = (param) => {
  param--;
  return param;
};
function MyFunction() {
  alert("game over red win");
}
function MyReset() {
  redwidth = 50;
  bluewidth = 50;
  input1.value = 50;
  input2.value = 50;
  redNum = input1.value;
  blueNum = input2.value;
  redButton.style = `width:${redwidth}%`;
  blueButton.style = `width:${bluewidth}%`;
  // const sum = input1.value + input2.value;
  // result = "";
}
resetButton.addEventListener("click", () => {
  MyReset();
});

redButton.addEventListener("click", () => {
  if (sum >= 100) {
    result = redClickedblue(blueNum);
    blueNum = result;
    input2.value = result;
  }
  result = redClicked(redNum);
  redNum = result;
  input1.value = result;
  if (redNum === 101) {
    MyFunction();
    MyReset();
  }
  redButton.style = `width:${(redwidth += 1)}%`;
  blueButton.style = `width:${(bluewidth -= 1)}%`;
});

blueButton.addEventListener("click", () => {
  if ((sum) => 100) {
    result = blueClickedred(redNum);
    redNum = result;
  }
});
