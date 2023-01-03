const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

const state = {
  menuIsOpen: false,
  overlayIsOn: false,
};

menu.addEventListener("click", () => {
  if (state.menuIsOpen && state.overlayIsOn) {
    menuClose(menu, state);
    overlayOff(overlay, state);
  } else {
    menuOpen(menu, state);
    overlayOn(overlay, state);
  }
});

overlay.addEventListener("click", () => {
  menuClose(menu, state);
  overlayOff(overlay, state);
});

function overlayOn(overlay, state) {
  addClass("overlay-on", overlay.classList);
  state.overlayIsOn = true;
}
function overlayOff(overlay, state) {
  removeClass("overlay-on", overlay.classList);
  state.overlayIsOn = false;
}

function menuOpen(menu, state) {
  addClass("open", menu.classList);
  state.menuIsOpen = true;
}

function menuClose(menu, state) {
  removeClass("open", menu.classList);
  state.menuIsOpen = false;
}

function addClass(className, classList) {
  classList.add(className);
}
function removeClass(className, classList) {
  classList.remove(className);
}
