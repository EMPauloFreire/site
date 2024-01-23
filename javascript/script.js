document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach(carousel => {
    const itemsList = carousel.querySelector('.items');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');

    let currentIndex = 0;
    const itemsPerPage = 4;
    const totalItems = itemsList.querySelectorAll('.item').length;

    function showItems() {
      itemsList.querySelectorAll('.item').forEach(item => {
        item.style.display = 'none';
      });

      for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
        const currentItem = itemsList.querySelector(`.item:nth-child(${i + 1})`);
        if (currentItem) {
          currentItem.style.display = 'block';
        }
      }
    }

    function nextItem() {
      if (currentIndex + itemsPerPage < totalItems) {
        currentIndex += itemsPerPage;
        showItems();
      }
    }

    function prevItem() {
      if (currentIndex - itemsPerPage >= 0) {
        currentIndex -= itemsPerPage;
        showItems();
      }
    }

    showItems();

    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);
  });
});
