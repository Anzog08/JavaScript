const myInfoArray = [
  { id: "IDENTIFICATION CARD" },
  {
    Image:
      "https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw",
  },
  { name: "Chinzorigt" },
];
const container = document.getElementsByClassName("container")[0];
container.style.display = "flex";
container.style.alignContent = "center";
container.style.justifyContent = "center";

const cardDiv = document.createElement("div");
cardDiv.style.flexDirection = "column";
cardDiv.style.width = "400px";
cardDiv.style.height = "250px";
cardDiv.style.border = "1px solid black";
cardDiv.style.borderRadius = "10px";
cardDiv.style.boxShadow = "10px 20px 30px gray; -10px -20px -30px";
cardDiv.style.overflow = "hidden";
container.appendChild(cardDiv);

// cardDiv.style.

const upperId = document.createElement("div");
upperId.style.width = "400px";
upperId.style.height = "40px";
upperId.style.backgroundColor = "blue";
upperId.style.fontSize = "30px";
upperId.style.display = "flex";
upperId.style.justifyContent = "center";
upperId.style.color = "white";
cardDiv.appendChild(upperId);

myInfoArray.forEach((el) => {
  if (el.id != "" && el.id != undefined) {
    upperId.innerHTML = el.id;
  }
});
const Image = document.createElement("img");
myInfoArray;

const generelID = document.createElement("div");
generelID.style.border = "1px solid red";
generelID.style.width = "400px";
generelID.style.height = "200px";

cardDiv.appendChild(generelID);
