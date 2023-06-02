// Your code here.

    document.addEventListener('DOMContentLoaded', () => {
      const itemsContainer = document.querySelector('.items');
      let isDragging = false;
      let startPosition = 0;
      let startScrollLeft = 0;

      itemsContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        startPosition = event.pageX;
        startScrollLeft = itemsContainer.scrollLeft;
      });

      itemsContainer.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        event.preventDefault();
        const distance = event.pageX - startPosition;
        itemsContainer.scrollLeft = startScrollLeft - distance;
      });

      itemsContainer.addEventListener('mouseup', () => {
        isDragging = false;
      });

      itemsContainer.addEventListener('mouseleave', () => {
        isDragging = false;
      });
    });
  