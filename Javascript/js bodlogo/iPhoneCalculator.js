const input = document.getElementById("input");
// const result = document.getElementById("result");
const clear = document.getElementById("AC");
const nega = document.getElementById("+/-");
const module = document.getElementById("%");
const devide = document.getElementById("/");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const multi = document.getElementById("*");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const minus = document.getElementById("-");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const plus = document.getElementById("+");
const num0 = document.getElementById("0");
const point = document.getElementById(".");
const equals = document.getElementById("=");

let numbers = "";
let operator = "";
let operatedClicked = false;
let hariu = 0;

input.addEventListener("change", (event) => {
  input.value = parseFloat(event.target.value);
});

point.addEventListener("click", () => {
  if (touchAdded === 1) {
    input.value = 0;
  } else {
    input.value = input.value + "0";
  }
});

num0.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "0";
  } else {
    input.value += "0";
  }
});

num1.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "1";
  } else {
    input.value += "1";
  }
});

num2.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "2";
  } else {
    input.value += "2";
  }
});

num3.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "3";
  } else {
    input.value += "3";
  }
});

num4.addEventListener("click", () => {
  if (operatedClicked === true) {
    input.value = "";
  }

  if (input.value === "" || input.value === "0") {
    input.value = "4";
  } else {
    input.value += "4";
  }
});

// num5.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "5";
//     num = "";
//   } else {
//     input.value += "5";
//     num = "";
//   }
// });

// num6.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "6";
//     num = "";
//   } else {
//     input.value += "6";
//     num = "";
//   }
// });
// num7.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "7";
//     num = "";
//   } else {
//     input.value += "7";
//     num = "";
//   }
// });
// num8.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "8";
//     num = "";
//   } else {
//     input.value += "8";
//     num = "";
//   }
// });
// num9.addEventListener("click", () => {
//   if (num != "") {
//     input.value = "9";
//     num = "";
//   } else {
//     input.value += "9";
//     num = "";
//   }
// });

plus.addEventListener("click", () => {
  operator = "+";
  operatedClicked = true;
  numbers = input.value;
});

module.addEventListener("click", () => {
  operator = "%";
  operatedClicked = true;
  numbers = input.value;
});

devide.addEventListener("click", () => {
  operator = "/";
  operatedClicked = true;
  numbers = input.value;
});

multi.addEventListener("click", () => {
  operator = "*";
  operatedClicked = true;
  numbers = input.value;
});
minus.addEventListener("click", () => {
  operator = "-";
  operatedClicked = true;
  numbers = input.value;
});

nega.addEventListener("click", () => {
  touchAdded = 1;
  input.value += "";
});

equals.addEventListener("click", () => {
  giveResult();
});

clear.addEventListener("click", () => {
  input.value = "0";
  numbers = "";
  operator = "";
  operatedClicked = false;
  hariu = "";
});

const giveResult = () => {
  switch (operator) {
    case "+":
      hariu = parseFloat(numbers) + parseFloat(input.value);
      break;
    case "-":
      hariu = parseFloat(numbers) - parseFloat(input.value);
      break;
    case "*":
      hariu = parseFloat(numbers) * parseFloat(input.value);
      break;
    case "/":
      hariu = parseFloat(numbers) / parseFloat(input.value);
      break;
    case "%":
      hariu = parseFloat(numbers) % parseFloat(input.value);
      break;
  }
  input.value = hariu;
};
