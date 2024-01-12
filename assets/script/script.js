const menuBtn = document.querySelector('.menuBtns');
const htmlElement = document.querySelector('html');
const navLinks = document.querySelectorAll('nav a');
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
        htmlElement.classList.remove('open');
    });
});
const accordionItems = document.querySelectorAll('.faq__container-accord-item');

    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });