export default function animationInitScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
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
