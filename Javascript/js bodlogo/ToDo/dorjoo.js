const addCard = document.getElementsByClassName("buttons");
const modal = document.getElementById("Modal");
const card = document.getElementById("card");
const addButton = document.getElementById("add_button");
// const addedTask = document.getElementById("added_task");
const btn = document.getElementById("button");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const valueEl = document.querySelector(".value");
// const Added_task = document.querySelector(".Added_task");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
const title1 = document.getElementById("title1");
const description1 = document.getElementById("description1");
const status1 = document.getElementById("sta");
const priority1 = document.getElementById("pri");
const restart = () => {
  (title1.value = ""),
    (description1.value = ""),
    (status1.value = "To do"),
    (priority1.value = "Low");
  todo_values.title = "";
  todo_values.description = "";
  todo_values.status = "To do";
  todo_values.priority = "Low";
};
const states = [];
const todo_values = {
  title: "",
  description: "",
  status: "To do",
  priority: "Low",
};

const cardComponent = (props) => {
  const { title, description, status, priority } = props;
  return `  <div class="addedTask">
  <div>${status}</div>

  <div class="mid_add">
    <div>${title}</div>
    <div>${description}</div>
    <div id="priorit">${priority}</div>
  </div>
  <div class="modal_buttons">
    <button
      id="closeButton"
      style="border: none; background-color: #fefefe"
    >
      <i
        id="close"
        class="material-symbols-outlined"
        style="
          border-radius: 50px;
          border: 2px solid #c3c3c3;
          font-size: 15px;
          padding: 5px;
        "
      >
        close
      </i>
    </button>
    <button
      id="closeButton"
      style="border: none; background-color: #fefefe"
    >
      <i
        id="close"
        class="material-symbols-outlined"
        style="
          border-radius: 50px;
          border: 2px solid #c3c3c3;
          font-size: 15px;
          padding: 5px;
        "
      >
        edit_square
      </i>
    </button>
  </div>
</div>`;
};

const render = () => {
  const addedTask = document.getElementById("addedTaskAll");
  let textJson = JSON.parse(localStorage.getItem("todo"));
  let myObject = textJson[0];
  const result = cardComponent(myObject);
  addedTask.innerHTML = result;
};
title1.addEventListener("change", (event) => {
  todo_values.title = event.target.value;
});

description1.addEventListener("change", (event) => {
  todo_values.description = event.target.value;
});
status1.addEventListener("change", (event) => {
  todo_values.status = event.target.value;
});

priority1.addEventListener("change", (event) => {
  todo_values.priority = event.target.value;
});
addButton.addEventListener("click", () => {
  states.push(todo_values);
  // console.log(states[0]);
  localStorage.setItem("todo", JSON.stringify(states));
  restart();
  modal.style.display = "none";
  render();
});

const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
updateTime();
