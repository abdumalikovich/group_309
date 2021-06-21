// Поиск
let btn_univ = document.querySelector('#abc') // 1 element
let btn_id = document.getElementById('abc') // 1 element

let btns_univ = document.querySelectorAll('.abc') // array
let btns_class = document.getElementsByClassName('abc') // array
let btns_tag = document.getElementsByTagName('button') // array

// Классы
btn_univ.classList.add('active')
btn_univ.classList.remove('active')
btn_univ.classList.toggle('active')
btn_univ.classList.contains('active')

// Аттрибуты
let inp = document.querySelector('input')

inp.setAttribute('placeholder', 'Введите свое имя')
inp.setAttribute('value', prompt('Введите текст'))

// Стили
inp.style.color = 'red'
inp.style.backgroundColor = 'blue'

// События
btn_univ.onclick = () => { console.log('Клик') }
btn_univ.onmouseenter = () => { console.log('Вход') }
btn_univ.onmouseleave = () => { console.log('Выход') }
btn_univ.onmousemove = () => { console.log('Движение') }
btn_univ.onscroll = () => { console.log('Скроллинг') }

let h1 = document.querySelector('h1')

h1.onclick = () => {
    h1.style.color = 'red'
    h1.classList.toggle('active')
}

for(let item of btns_univ) {
    item.onclick = () => {
        item.style.opacity = '.1'
    }
}
