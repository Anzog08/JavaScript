const pics = [
  "./download1.jpeg",
  "./download2.jpeg",
  "./download3.jpeg",
  "./download4.jpeg",
  "./download5.jpeg",
];

const image = document.getElementById("img");
let counter = 0;
image.src = pics[counter];

const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  if (counter < pics.length - 1) {
    counter++;
    image.src = pics[counter];
  }
});

prev.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    image.src = pics[counter];
  }
});
