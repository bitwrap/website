let isExpanded = false;
const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  if (isExpanded) {
    // open with transition
    menu.style.display = "none";
    isExpanded = false;
  } else {
    menu.style.display = "block";
    isExpanded = true;
  }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      isExpanded = false;
      menu.style.display = "none";
    }
  });
  