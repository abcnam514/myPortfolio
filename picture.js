//화살표.js
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
    slider.scrollLeft -= 300; // 왼쪽으로 300px 이동
});

rightArrow.addEventListener('click', () => {
    slider.scrollLeft += 300; // 오른쪽으로 300px 이동
});
