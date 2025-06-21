
 const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.menu-item');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-category');

        items.forEach(item => {
          item.classList.remove('show');
          if (category === 'all' || item.classList.contains(category)) {
            item.classList.add('show');
          }
        });
      });
    });