const myInfoArray = [
  { id: "identification card" },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-hN-snqE0B_-T4gBxQnx1NFglh8NMH-fPD9PNadPwcMnIelgR7II5E2ILcC2ziUE6t8&usqp=CAU",
  },
  {
    mainInfo: [
      { name: "Geoff Sample" },
      { dob: "Area Manager" },
      { Idno: "123abc" },
      { Issued: "January 2011" },
      { Expires: "December 2013" },
    ],
  },
  { job: "Williams" },
  { service: "Maintenance Service" },
];
const container = document.getElementsByClassName("container")[0];
const cardDiv = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
cardDiv.style.width = "400px";
cardDiv.style.height = "300px";
cardDiv.style.border = "1px solid black";
cardDiv.style.borderRadius = "10px";
cardDiv.style.overflow = "hidden";
cardDiv.style.boxShadow = "10px 10px 30px grey, -10px -10px 30px grey";
container.appendChild(cardDiv);
const upperId = document.createElement("div");
upperId.style.backgroundColor = "blue";
upperId.style.display = "flex";
upperId.style.justifyContent = "center";
upperId.style.alignItems = "center";
upperId.style.height = "50px";
upperId.style.fontSize = "30px";
upperId.style.color = "#fff";
myInfoArray.forEach((el) => {
  if (el.id != "" && el.id != undefined) {
    upperId.innerHTML = el.id.toUpperCase();
  }
});
cardDiv.appendChild(upperId);
const leftSide = document.createElement("div");
const rigthSide = document.createElement("div");
const lowerDiv = document.createElement("div");
const innerRight = document.createElement("div");
innerRight.style.height = "250px";
innerRight.style.width = "200px";
innerRight.style.border = "1px solid red";
rigthSide.appendChild(innerRight);
lowerDiv.append(leftSide, rigthSide);
cardDiv.appendChild(lowerDiv);
lowerDiv.style.display = "flex";
const image = document.createElement("img");
myInfoArray.forEach((el) => {
  if (el.image && el.image != undefined) {
    image.src = el.image;
  }
});
leftSide.appendChild(image);
const mainInfo = myInfoArray.filter((el) => {
  if (el.mainInfo && el.mainInfo != undefined) {
    return true;
  }
});
const realMainInfo = mainInfo[0].mainInfo;
const realMainKeys = realMainInfo.map((el) => {
  const result = Object.keys(el)[0];
  return result;
});
realMainKeys.forEach((el, index) => {
  const infoDiv = document.createElement("div");
  const infoDivLeftChild = document.createElement("div");
  const infoDivRigthChild = document.createElement("div");
  infoDiv.style.display = "flex";
  infoDiv.style.justifyContent = "space-between";
  infoDivLeftChild.innerHTML = `${el}:`;
  infoDivRigthChild.innerHTML = realMainInfo[index][el];
  infoDiv.append(infoDivLeftChild, infoDivRigthChild);
  innerRight.appendChild(infoDiv);
});
