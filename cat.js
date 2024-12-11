const box = document.querySelector('.box')
const fast = document.querySelector('.fast')

fast.addEventListener('input', function() {
    box.style.animation = `gif 1s infinite steps(10), run ${fast.value}s linear infinite`;
    console.log(fast.value);
});