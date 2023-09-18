let addbtn = document.querySelector("#add");
var list = document.querySelector("#list");
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
    list.appendChild(el);

    let deletebtn = document.createElement("button");
    deletebtn.className = "delete-btn";
    deletebtn.innerHTML = "Delete";
    el.appendChild(deletebtn);

    deletebtn.addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
    });
    
  } else {
    alert("Please write something !");
  }
};
