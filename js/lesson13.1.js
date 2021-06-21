// Создание элементов в JavaScript
// let main = document.querySelector('main')
// let button = document.querySelector('button')

// button.onclick = () => {
//     let div = document.createElement('div')
//     let h1 = document.createElement('h1')
//     let p = document.createElement('p')
    
//     div.classList.add('item')
//     h1.innerText = 'Hello World'
//     p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo laudantium! Ad, iste repellat maiores possimus explicabo facilis quam quia dolorum veritatis, tempore minus culpa illo? Totam reiciendis aliquid cupiditate.s'
    
//     div.append(h1, p)
//     main.append(div)
// }

let input = document.querySelector('input')
let button = document.querySelector('button')
let table = document.querySelector('table')

button.onclick = () => {
    event.preventDefault()

    let value = input.value
    let new_tr = document.createElement('tr')
    let new_td = document.createElement('td')

    new_td.innerText = value

    if(input.value[0] == '+') new_td.classList.add('plus')
    else if(input.value[0] == '-') new_td.classList.add('minus')
    else {
        console.log('bye')
        return false
    }

    new_tr.append(new_td)
    table.append(new_tr)
}
