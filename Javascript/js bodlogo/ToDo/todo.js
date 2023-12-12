const card = document.getElementById("MyCard");
const click = document.getElementsByClassName("click");
const modal = document.getElementById("MyModal");
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const valueEl = document.querySelector(".value");

const todoMid = document.getElementById("todo-mid");
const progresMid = document.getElementById("progress-mid");
const stuckMid = document.getElementById("stuck-mid");
const doneMid = document.getElementById("done-mid");

Array.prototype.forEach.call(click, (el) => {
  el.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const title = document.getElementById("title");
const statuss = document.getElementById("status");
const priority = document.getElementById("priority");
const add_taskButton = document.getElementById("Add_Task");
const description = document.getElementById("description");

let states = [];
states = JSON.parse(localStorage.getItem("myToDo"));

const MyObject = {
  id: "",
  title: "",
  status: "",
  priority: "",
  description: "",
};

const uniqId = () => {
  const uniq = "id" + new Date().getTime();
  return uniq;
};

const setData = () => {
  MyObject.id = uniqId();
  MyObject.title = title.value;
  MyObject.description = description.value;
  MyObject.status = statuss.value;
  MyObject.priority = priority.value;

  states.push({ ...MyObject });

  localStorage.setItem("myToDo", JSON.stringify(states));
  render();
};

add_taskButton.addEventListener("click", (event) => {
  if (event.target != modal) {
    modal.style.display = "none";
  }

  setData();
  restart();
});

const restart = () => {
  (title.value = ""),
    (description.value = ""),
    (statuss.value = ""),
    (priority.value = "");
};

const cardComponent = (props) => {
  const { title, description, status, priority, id } = props;
  return `
           <div class="ToDo" draggable="true" id="${id}"> 
            <div class="todoTitle">
             <div class="toDoTitleLeft">
               <div class="checkIcon">
                 <span
                   class="material-symbols-outlined"
                   style="font-size: 20px"
                 >
                   check
                 </span>
               </div>
               <div class="titleText">${title}</div>
             </div>
             <div class="toDoTitleRight">
               <span class="material-symbols-outlined" style="font-size: 20px">
                 close
               </span>
             </div>
           </div>

           <div class="desc">
             <div class="descText">${description}</div>
             <div class="descIcon">
               <i style="font-size: 20px" class="fa">&#xf044;</i>
             </div>
           </div>

           <div> ${status}</div>

           <div class="prio">${priority}</div>
          </div>`;
};

const render = () => {
  const todoMid = document.getElementById("todo-mid");
  const progresMid = document.getElementById("progress-mid");
  const stuckMid = document.getElementById("stuck-mid");
  const doneMid = document.getElementById("done-mid");

  let jsonText = JSON.parse(localStorage.getItem("myToDo"));
  todoMid.innerHTML = "";
  progresMid.innerHTML = "";
  stuckMid.innerHTML = "";
  doneMid.innerHTML = "";

  jsonText.forEach((el) => {
    const result = cardComponent(el);

    switch (el.status) {
      case "ToDo":
        todoMid.innerHTML += result;
        break;
      case "InProgress":
        progresMid.innerHTML += result;
        break;
      case "Stuck":
        stuckMid.innerHTML += result;
        break;
      case "Done":
        doneMid.innerHTML += result;
        break;
      default:
        break;
    }
  });

  const draggable = document.querySelectorAll(".ToDo");

  draggable.forEach((el) => {
    el.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("dragg", event.target.id);
    });
  });
};
render();

const draggable = document.querySelectorAll(".result");
const dropable = document.querySelectorAll(".card");

let temp;

draggable.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("dragg", event.target.id);
  });
});

dropable.forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});

const cardTodo = document.getElementById("cardTodo");
const cardProg = document.getElementById("cardProg");
const cardStuck = document.getElementById("cardStuck");
const cardDone = document.getElementById("cardDone");

cardTodo.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "ToDo");
  todoMid.appendChild(draggedTodo);
});

cardProg.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "InProgress");
  progresMid.appendChild(draggedTodo);
});

cardStuck.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "Stuck");
  stuckMid.appendChild(draggedTodo);
});

cardDone.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "Done");
  doneMid.appendChild(draggedTodo);
});

function updateLocalStorage(event, status) {
  temp = event.dataTransfer.getData("dragg");
  const draggedTodo = document.getElementById(temp);
  const dbData = JSON.parse(localStorage.getItem("myToDo"));

  const currentTask = dbData.findIndex(({ id }) => id == temp);
  dbData[currentTask].status = status;

  localStorage.setItem("myToDo", JSON.stringify(dbData));

  return draggedTodo;
}
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
