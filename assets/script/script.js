const accordionItems = document.querySelectorAll('.faq__container-accord-item');

    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });