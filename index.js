const nav = document.querySelectorAll(".container nav ul li ");
const items = document.querySelectorAll(".container .items ul li");
const header = document.querySelector("h1");

nav.forEach(link => {
  link.addEventListener("click", e => {
    if (
      e.target.tagName === "LI" &&
      e.target.textContent.toLowerCase() === "all"
    ) {
      header.innerText = "All Cars";
      loopitems(items, e.target, showAll);
    } else {
      header.innerText = e.target.textContent;
      loopitems(items, e.target, showSelection);
    }
  });
});

function showAll(item) {
  item.classList.remove("hide");
}

function showSelection(item, target) {
  if (item.classList.contains(target.textContent.toLowerCase())) {
    item.classList.remove("hide");
  } else {
    item.classList.add("hide");
  }
}

function loopitems(items, e, callback) {
  items.forEach(item => {
    callback(item, e);
  });
}
