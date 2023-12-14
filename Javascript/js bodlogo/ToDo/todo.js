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
states = JSON.parse(localStorage.getItem("myToDo"))
  ? JSON.parse(localStorage.getItem("myToDo"))
  : [];

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

let activeEdit = false;

add_taskButton.addEventListener("click", (event) => {
  if (activeEdit) {
    editTastFunction();
  } else {
    modal.style.display = "block";
    setData();
    restart();
    location.reload();
  }
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
               <div id=${id}  >${
    status == "Done" ? `<div class="aa">&#10003</div>` : "&#10003"
  }</div>
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
 
          
 
           <div class="prio">${priority}</div>
          </div>
          `;
};

let edittedTaskID = "";

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

  jsonText?.forEach((el) => {
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
    }
  });

  const editButton = document.querySelectorAll(".descIcon");
  const addTask = document.getElementById("addTask");

  editButton.forEach((el) => {
    el.addEventListener("click", () => {
      const parentId = el.parentElement.parentElement.id;
      edittedTaskID = parentId;

      modal.style.display = "block";
      addTask.innerHTML = "<b>Edit Task</b>";
      add_taskButton.innerHTML = "Save";
      activeEdit = true;
      states.forEach((el) => {
        if (el.id === parentId) {
          title.value = el.title;
          statuss.value = el.status;
          priority.value = el.priority;
          description.value = el.description;
        }
      });
    });
  });
};
console.log(edittedTaskID);
function editTastFunction() {
  const findBack = JSON.parse(localStorage.getItem("myToDo"));
  const chessArr = findBack.map((el) => {
    if (el.id === edittedTaskID) {
      return {
        ...el,
        title: title.value,
        status: statuss.value,
        description: description.value,
        priority: priority.value,
      };
    }
    return el;
  });

  localStorage.setItem("myToDo", JSON.stringify(chessArr));
  add_taskButton.innerHTML = "Add Task";
  modal.style.display = "none";
  activeEdit = false;
  location.reload();
}

render();

const dragable = document.querySelectorAll(".ToDo");

dragable.forEach((el) => {
  el.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("dragg", event.target.id);
  });
});

const deleteButton = document.querySelectorAll(".toDoTitleRight");

deleteButton.forEach((el) => {
  el.addEventListener("click", () => {
    const parent = el.parentNode;
    const grandparent = parent.parentNode;
    const grandparentID = grandparent.id;

    const callBack = JSON.parse(localStorage.getItem("myToDo"));
    const newArr = callBack.filter((el) => {
      if (el.id === grandparentID) {
        return false;
      }
      return true;
    });

    localStorage.setItem("myToDo", JSON.stringify(newArr));
    render();
    location.reload();
  });
});

const checkButton = document.querySelectorAll(".checkIcon");

checkButton.forEach((el) => {
  el.addEventListener("click", () => {
    let parentId = el.parentElement.parentElement.parentElement.id;
    const findBack = JSON.parse(localStorage.getItem("myToDo"));
    const checkArr = findBack.map((el) => {
      if (el.id === parentId) {
        return { ...el, status: "Done" };
      }
      return el;
    });
    localStorage.setItem("myToDo", JSON.stringify(checkArr));
    location.reload();
  });
});

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
  findCount();
  location.reload();
});

cardProg.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "InProgress");
  progresMid.appendChild(draggedTodo);
  findCount();
  location.reload();
});

cardStuck.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "Stuck");
  stuckMid.appendChild(draggedTodo);
  findCount();
  location.reload();
});

cardDone.addEventListener("drop", (event) => {
  const draggedTodo = updateLocalStorage(event, "Done");
  doneMid.appendChild(draggedTodo);
  findCount();
  location.reload();
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
const box = document.querySelectorAll(".card");
console.log(box);

const findCount = () => {
  box.forEach((el) => {
    const tasks = el.querySelectorAll(".ToDo");
    console.log(tasks);
    const taskCount = el.getElementsByClassName("count")[0];
    console.log(taskCount);
    taskCount.innerHTML = tasks.length;
  });
};
findCount();

// const updateTime = () => {
//   const currentTime = new Date();

//   let currentHour = currentTime.getHours();
//   const currentMinute = currentTime.getMinutes();

//   if (currentHour > 12) {
//     currentHour -= 12;
//   }
//   hourEl.textContent = currentHour.toString();
//   minuteEl.textContent = currentMinute.toString().padStart(2, "0");
// };
// setInterval(updateTime, 1000);
// updateTime();
