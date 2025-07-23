function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabMenu li");
  const tabcontent = document.querySelectorAll(".js-tabContent section");

  function activeTab(index) {
    tabcontent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabcontent[index].classList.add("ativo");
  }

  tabmenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", function () {
      activeTab(index);
    });
  });
}

initTabNav();

function initAccordion() {
  const accordionItem = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  if (accordionItem.length) {
    accordionItem[0].classList.add(activeClass);
    accordionItem[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionItem.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}

function animationInitScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animationScroll() {
      sections.forEach((section) => {
        const sectiontop = section.getBoundingClientRect().top;
        const isSectionVisible = sectiontop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animationScroll();
    window.addEventListener("scroll", animationScroll);
  }
}
animationInitScroll();
