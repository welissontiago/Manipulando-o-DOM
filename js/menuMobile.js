import outsideClick from "./outSideClick.js";
export default function initMenuMobile() {}

const menuButton = document.querySelector('[data-menu="button"]');
const menuLista = document.querySelector('[data-menu="lista"]');

function openMenu(event) {
  menuLista.classList.add("active");
  menuButton.classList.add("active");
  outsideClick(menuLista, ["click", "touchstart"], () => {
    menuLista.classList.remove("active");
    menuButton.classList.remove("active");
  });
}

menuButton.addEventListener("click", openMenu);
