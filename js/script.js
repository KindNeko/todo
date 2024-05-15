const input = document.querySelector(".input-box");
const list = document.querySelector(".todo-list");
const btn = document.querySelector(".todo-btn");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Строка пуста");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = input.value;
  list.appendChild(li);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);

  input.value = "";
  saveDate();
});

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
      return;
    }

    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
      return;
    }
  },
  false
);

function saveDate() {
  localStorage.setItem("data", list.innerHTML);
}
function showTask() {
  list.innerHTML = localStorage.getItem("data");
}
showTask();
