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
    if (!isDragging) return; // If not dragging, ignore the event
    event.preventDefault();
    const distance = event.pageX - startPosition;
    itemsContainer.scrollLeft = startScrollLeft - distance;
  });

  const endDragging = () => {
    isDragging = false;
  };

  itemsContainer.addEventListener('mouseup', endDragging);
  itemsContainer.addEventListener('mouseleave', endDragging);
});
