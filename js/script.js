import initTabNav from "./initTabNav.js";
import Accordion from "./Accordion.js";
import ScrollSuave from "./initScroll.js";
import animationInitScroll from "./animationInitScroll.js";
import initModal from "./modal.js";
import initTooltip from "./tooltip.js";
import initDropDown from "./dropdownMenu.js";
import initMenuMobile from "./menuMobile.js";
import initFuncionamento from "./dataFuncionamento.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initModal();
initMenuMobile();
initDropDown();
initTabNav();
animationInitScroll();
initTooltip();
initFuncionamento();
