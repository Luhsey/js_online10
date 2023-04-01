const list = document.getElementById("list");
const items = list.getElementsByTagName("li");

let prevSelected = null;
let startSelected = null;

list.addEventListener("click", (event) => {
  const clickedItem = event.target;
  if (clickedItem.tagName !== "LI") return;

  if (event.ctrlKey) {
    clickedItem.classList.toggle("selected");
    if (prevSelected) prevSelected.classList.toggle("selected");
    prevSelected = clickedItem;
  } else if (event.shiftKey) {
    if (!startSelected) startSelected = clickedItem;
    const startIndex = Array.prototype.indexOf.call(items, startSelected);
    const endIndex = Array.prototype.indexOf.call(items, clickedItem);
    const [min, max] = [startIndex, endIndex].sort();
    for (let i = min; i <= max; i++) {
      items[i].classList.add("selected");
    }
  } else {
    clickedItem.classList.add("selected");
    if (prevSelected && prevSelected !== clickedItem) {
      prevSelected.classList.remove("selected");
    }
    prevSelected = clickedItem;
    startSelected = clickedItem;
  }
});
const container = document.getElementById("container");
container.addEventListener("click", (event) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = `${event.pageX - 5}px`;
  dot.style.top = `${event.pageY - 5}px`;
  container.appendChild(dot);
});

