import outsideClick from "./outSideClick.js";
export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      event.preventDefault();
      menuLista.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuLista, eventos, () => {
        menuLista.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    eventos.forEach((event) => menuButton.addEventListener(event, openMenu));
  }
}
