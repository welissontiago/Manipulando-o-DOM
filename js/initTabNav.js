export default function initTabNav() {
  const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabcontent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabcontent[index].dataset.anime;
    tabcontent[index].classList.add("ativo", direcao);
  }

  tabmenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", function () {
      activeTab(index);
    });
  });
}
