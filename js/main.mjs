const openMenu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const list = openMenu.classList;
const overlayClassList = overlay.classList;

openMenu.addEventListener("click", () => {
  if (list.contains("open")) {
    list.remove("open");
  } else {
    list.add("open");
  }

  if (overlayClassList.contains("overlay-on")) {
    overlayClassList.remove("overlay-on");
  } else {
    overlayClassList.add("overlay-on");
  }
});

overlay.addEventListener("click", () => {
  if (list.contains("open")) {
    list.remove("open");
  }

  if (overlayClassList.contains("overlay-on")) {
    overlayClassList.remove("overlay-on");
  }
});
