const menu = document.querySelector(".menu");
const menuButton = document.querySelector("#menu-button");
console.log(menu);
const overlay = document.querySelector(".overlay");

const state = {
  menuIsOpen: false,
  overlayIsOn: false,
};

menuButton.addEventListener("click", () => {
  if (state.menuIsOpen && state.overlayIsOn) {
    closeMenu(menuButton, menu, state);
    overlayOff(overlay, state);
  } else {
    openMenu(menuButton, menu, state);
    overlayOn(overlay, state);
  }
});

overlay.addEventListener("click", () => {
  closeMenu(menuButton, menu, state);
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

function openMenu(menuButton, menu, state) {
  addClass("open", menu.classList);
  changeImage("icon-menu-close.svg", menuButton);
  state.menuIsOpen = true;
}

function closeMenu(menuButton, menu, state) {
  changeImage("icon-menu.svg", menuButton);
  removeClass("open", menu.classList);
  state.menuIsOpen = false;
}

function addClass(className, classList) {
  classList.add(className);
}
function removeClass(className, classList) {
  classList.remove(className);
}

function changeImage(imageName, button) {
  button.src = `./assets/images/${imageName}`;
}
