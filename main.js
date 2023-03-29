const destination = document.getElementById("typedtext");
let quote = "";

function loadQuote() {
  return fetch("https://api.quotable.io/random")
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    .then((data) => data.content);
}

async function typeWriter() {
  while (true) {
    quote = await loadQuote();
    for (let i = 0; i <= quote.length; i++) {
      destination.innerHTML = quote.substring(0, i) + "<span>\u25AE<span>";
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    destination.innerHTML = "";
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

typeWriter();

const lightThemeBtn = document.getElementById("light-theme-btn");
const darkThemeBtn = document.getElementById("dark-theme-btn");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("dark-theme");
}

lightThemeBtn.addEventListener("click", toggleTheme);
darkThemeBtn.addEventListener("click", toggleTheme);

