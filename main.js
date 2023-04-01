const list = document.getElementById("list");
let prevSelectedIndex = -1;

list.addEventListener("click", (event) => {
  const target = event.target;
  const selectedIndex = Array.from(target.parentNode.children).indexOf(target);
  
  if (selectedIndex === -1) return; 
  
  if (event.ctrlKey || event.metaKey) {
    target.classList.toggle("highlight");
  } else if (event.shiftKey) {
    if (prevSelectedIndex === -1) {
      list.firstChild.classList.add("highlight");
      prevSelectedIndex = 0;
    }
    const startIndex = Math.min(selectedIndex, prevSelectedIndex);
    const endIndex = Math.max(selectedIndex, prevSelectedIndex);
    for (let i = startIndex; i <= endIndex; i++) {
      list.children[i].classList.add("highlight");
    }
  } else {
    for (const li of list.children) {
      li.classList.remove("highlight");
    }
    target.classList.add("highlight");
  }
  
  prevSelectedIndex = selectedIndex;
});
document.addEventListener("click", (event) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.top = `${event.clientY}px`;
  dot.style.left = `${event.clientX}px`;
  document.body.appendChild(dot);
});
