let addbtn = document.querySelector("#add");
var list = document.querySelector("#list");
let tasks = [];

addbtn.addEventListener("click", addTodo);

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTodo(e) {
  e.target.parentElement.parentElement.style.display = "none";
}

function addTodo(e) {
  localStorage.getItem("");
  e.preventDefault();
  let inputKeyword = document.querySelector("#list-item");

  if (inputKeyword.value !== "") {
    let el = document.createElement("li");
    el.className = "task";

    let value = document.createElement("p");

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    //! Add task to array and LS
    value.innerHTML = inputKeyword.value;
    tasks.push(inputKeyword.value);
    updateStorage();
    inputKeyword.value = "";
    el.appendChild(value);
    list.appendChild(el);

    //! Delete Task
    let deletebtn = document.createElement("button");
    deletebtn.className = "delete-btn";
    deletebtn.innerHTML = "Delete";

    deletebtn.addEventListener("click", deleteTodo);

    //! Done Task
    let donebtn = document.createElement("button");
    donebtn.className = "done-btn";
    donebtn.innerHTML = "Done";

    donebtn.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.childNodes[0].style.textDecoration =
        "line-through";
    });

    //!Add buttons to each task
    buttons.append(deletebtn, donebtn);
    el.appendChild(buttons);
  } else {
    alert("Please write something !");
  }
}
