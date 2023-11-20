// const htmlBody = document.getElementsByTagName("body")[0];

// const newH1Element = document.createElement("h1");

// newH1Element.innerHTML = "Hello JS";

// let changedText = "";

// const printChanges = (events) => {
//   changedText = event.target.value;
// };

// const logger = () => {
//   newH1Element.innerHTML = changedText;
//   htmlBody.appendChild(newH1Element);
// };

// Багшийн бичсэн

// const htmlBody = document.getElementsByTagName("body")[0];
// const newH1Element = document.createElement("h1");
// htmlBody.appendChild(newH1Element);
// // newH1Element.innerHTML = "Hi i'm created by create element function";
// let changedText = "";
// const printChanges = (event) => {
//  changedText = event.target.value;
// };
// const logger = () => {
//  newH1Element.innerHTML = changedText;
//  // onload();
// };
// newH1Element.innerHTML = "asd";
// const sayHelloWhenMouseOverSomething = () => {
//  console.log("Hello");
// };
// newH1Element.onmouseover = sayHelloWhenMouseOverSomething;
// newH1Element.onmouseout = sayHelloWhenMouseOverSomething;

// const plusButton = document.getElementById("plusButton");
// const minusButton = document.getElementById("minusButton");
// const input = document.getElementById("input");
// let counter = 0;
// input.value = counter;
// const adder = () => {};
// const reducer = () => {};
// plusButton.addEventListener("click", () => {});
// minusButton.addEventListener("click", () => {});
// input.addEventListener("change", () => {});

const htmlBody = document.getElementsByTagName("body")[0];
const newH1Element = document.createComment(h1);
htmlBody.appendChild(newH1Element);
newH1Element.innerHTML = "Hello JS";
console.log("Hello JS");
