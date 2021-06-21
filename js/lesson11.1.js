// Валидация input value
// let input = document.querySelector('input')
// let btn = document.querySelector('button')

// btn.onclick = () => {
//     event.preventDefault() // stop event

//     // Проверка на длину
//     if(input.value.length < 2 || input.value.length > 20) {
//         console.log('Странное имя, до свидания')

//         input.value = ''
//     } else {
//         console.log('Все отлично')
//     }
// }

// Регулярные выражения в JavaScript
let test_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let test_numbers = /^\d+$/
let test_letters = /^[A-Za-z]+$/

let email = document.querySelector('.email')
let button = document.querySelector('button')

button.onclick = () => {
    event.preventDefault()

    if(test_numbers.test(email.value) == false) {
        
    }
}












// Работа с формами и FormData()
