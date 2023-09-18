let addbtn = document.querySelector("#add");
let list = document.querySelector("list");
let tasks = [];

function updateStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addbtn.onclick = (e) => {
  localStorage.getItem("");
  e.preventDefault();
  let inputKeyword = document.querySelector("#list-item");

  if (inputKeyword.value !== "") {
    let el = document.createElement("li");
    el.innerHTML = inputKeyword.value;
    tasks.push(inputKeyword.value);
    updateStorage();
    inputKeyword.value = "";
  }
};
