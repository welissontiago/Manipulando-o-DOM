export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && fechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function cliqueForaDoModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    fechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaDoModal);
  }
}
