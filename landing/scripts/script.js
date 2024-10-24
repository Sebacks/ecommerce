const scrollContainer = document.getElementById('produCont');

let isDragging = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    scrollContainer.classList.add('agarre');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    e.preventDefault();
});
scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});
scrollContainer.addEventListener('mouseup', () => {
    isDragging = false;
    scrollContainer.classList.remove('agarre');
});

scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    scrollContainer.classList.remove('agarre');
});
