const draggableImages = document.querySelectorAll(".puzzle img");
const droppableBox = document.querySelectorAll(".puzzle div");
let temp;

draggableImages.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("image", event.target.id);
  });
});
droppableBox.forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  el.addEventListener("drop", (event) => {
    temp = event.dataTransfer.getData("image");
    const draggedElement = document.getElementById(temp);
    el.appendChild(draggedElement);
  });
});
