const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const equalsButton = document.getElementById("equalsButton");
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const divideButton = document.getElementById("devideButton");
const multiButton = document.getElementById("multiButton");
const moduleButton = document.getElementById("moduleButton");
const result = document.getElementById("result");

let num1;
let num2;
let butt;
let hariu;

const numbercheck = (param) => {
  if (typeof param === "number") {
    return true;
  }
  return false;
};

input1.addEventListener("change", (event) => {
  const hariu = numbercheck(parseFloat(event.target.value));
  if (hariu) {
    num1 = parseFloat(event.target.value);
  } else {
    alert(`${input1} is not a number`);
  }
});

plusButton.addEventListener("click", () => {
  butt = "+";
});
minusButton.addEventListener("click", () => {
  butt = "-";
});
divideButton.addEventListener("click", () => {
  butt = "/";
});
multiButton.addEventListener("click", () => {
  butt = "*";
});
moduleButton.addEventListener("click", () => {
  butt = "%";
});

input2.addEventListener("change", (event) => {
  const hariu = numbercheck(parseFloat(event.target.value));
  if (hariu) {
    num2 = parseFloat(event.target.value);
  } else {
    alert(`${input2} is not a number`);
  }
});

equalsButton.addEventListener("click", () => {
  switch (butt) {
    case "*":
      hariu = num1 * num2;
      break;
    case "+":
      hariu = num1 + num2;
      break;
    case "/":
      hariu = num1 / num2;
      break;
    case "-":
      hariu = num1 - num2;
      break;
    case "%":
      hariu = num1 % num2;
      break;
  }
  result.innerHTML = hariu;
});
