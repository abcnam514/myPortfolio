const radio = document.querySelectorAll('input[type="radio"]')
const background =document.querySelector('.main-container')
const work = document.querySelector('.work')

radio.forEach(item => {
    item.addEventListener('click', () => {

        if(item.value === 'light') {

            background.style.background = 'linear-gradient(180deg, rgba(252,252,252,1) 0%, rgba(143,143,143,1) 73%, rgba(99,99,99,1) 100%)'
            work.style.background = 'url("img/Work.png") no-repeat'

        }else if(item.value === 'dark') {
            background.style.background = 'linear-gradient(180deg, rgba(36,36,36,1) 0%, rgba(101,101,101,1) 27%, rgba(252,252,252,1) 100%)'
            work.style.background = 'url("img/workDark.png") no-repeat'
        }
    })
})
