// // Создание элементов
// // let button = document.querySelector('button')
let main = document.querySelector('main')

// // {/* <div class="item">
// // 		<p>hello</p>
// // 	</div>
// // */}

// // button.onclick = () => {
// //     let p = document.createElement('p')
// //     let div = document.createElement('div')

// //     div.classList.add('item')
// //     p.classList.add('a')
// //     p.setAttribute('id', 'a')
// //     p.innerText = prompt('Введите текст')

// //     div.append(p)
// //     main.append(div)
// // }

// let form = document.querySelector('form')
// let button = document.querySelector('button')
// let table = document.querySelector('table')

// form.onsubmit = () => {
//     event.preventDefault()

//     let value_pl_min = form.children[0].value

//     let tr = document.createElement('tr')
//     let td_1 = document.createElement('td')
//     let td_2 = document.createElement('td')
//     let td_3 = document.createElement('td')

//     td_1.innerText = value_pl_min.slice(0, 1)
//     td_2.innerText = value_pl_min.slice(2)
//     td_3.innerText = value_pl_min.slice(1, 2)

//     if(value_pl_min.slice(0, 1) == '-') tr.style.backgroundColor = 'red'
//     else tr.style.backgroundColor = 'green'

//     tr.append(td_1, td_2, td_3)
//     table.append(tr)
// }

// Клонирование элементов
// let header = document.querySelector('header')
// // CREATE
// let created_header = document.createElement('header')
// let created_div = document.createElement('div')

// created_div.innerText = 'CREATE'
// created_header.append(created_div)

// header.after(created_header)

// // CLONE
// let cloned_header = header.cloneNode(true)

// cloned_header.children[0].innerText = 'CLONE'

// created_header.after(cloned_header)

let arr = [1, 2, 3, 4, 5, 12, 312, 3, 12, 312, 3, 12]

for (let item of arr) {
    let p = document.createElement('p')

    p.innerText = item

    main.append(p)
}
