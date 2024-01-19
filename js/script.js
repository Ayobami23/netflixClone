document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((accordion) => {
    const header = accordion.querySelector('.accordion-header');
    const btn = header.querySelector('.fas');

    header.addEventListener('click', function () {
      if (accordion.classList.contains('active')) {
        // Close accordion if already open
        accordion.classList.remove('active');
        accordion.nextElementSibling.classList.remove('open');
        btn.classList.remove('fa-close');
        btn.classList.add('fa-plus');
      } else {
        // Open accordion if closed
        accordion.classList.add('active');
        accordion.nextElementSibling.classList.add('open');
        btn.classList.remove('fa-plus');
        btn.classList.add('fa-close');

        // Close other open accordions (single open state)
        accordions.forEach((otherAccordion) => {
          if (
            otherAccordion !== accordion &&
            otherAccordion.classList.contains('active')
          ) {
            otherAccordion.classList.remove('active');
            otherAccordion.nextElementSibling.classList.remove('open');
            const otherBtn = otherAccordion.querySelector('.fas');
            otherBtn.classList.remove('fa-close');
            otherBtn.classList.add('fa-plus');
          }
        });
      }
    });
  });
});
