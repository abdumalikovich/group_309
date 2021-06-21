// // Навигация по DOM
// let b = document.querySelector('b')

// console.log(b.children) // дети
// console.log(b.children[2]) // ребенок
// console.log(b.firstElementChild) // первый ребенок
// console.log(b.lastElementChild) // последний ребенок
// console.log(b.previousElementSibling) // брат до
// console.log(b.nextElementSibling) // брат после
// console.log(b.parentNode) // родитель

// // b.firstElementChild.children[2].
// let start = document.querySelector('.start')

let tr = document.querySelectorAll('tr')

for(let item of tr) {
    let all_td = item.children
    let total = 0

    for(let td of all_td) {
        total += +td.children[0].value / (all_td.length - 1)
    }

    item.lastElementChild.children[0].value = total.toString().slice(0, 3)
}
