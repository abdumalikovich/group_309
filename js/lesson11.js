// // Изменение текста и HTML-а внутри элемента
// let p = document.querySelector('p')
// let a = 'hello world'

// // p.innerText = a + ' me'
// p.innerText = `<button>Click me</button>`
// p.innerHTML = `<header>
// <div class="side-left">
//     <img src="" alt="">
//     <ul>
//         <li>hello </li>
//         <li>hello </li>
//         <li>hello </li>
//         <li>hello </li>
//     </ul>
// </div>
// <div class="side-right">
//     <img src="" alt="">
//     <ul>
//         <li>hello </li>
//         <li>hello </li>
//         <li>hello </li>
//         <li>hello </li>
//     </ul>
// </div>
// </header>`


let btn = document.querySelector('button')
let li_1 = document.querySelector('ul li:nth-child(1)')
let li_2 = document.querySelector('ul li:nth-child(2)')
let li_3 = document.querySelector('ul li:nth-child(3)')
let li_4 = document.querySelector('ul li:nth-child(4)')
let li_5 = document.querySelector('ul li:nth-child(5)')

btn.onclick = () => {
    btn.style.opacity = '.3'

    li_1.style.color = 'red'
    li_2.classList.add('active')
    li_3.innerText = 'hello world'
    li_4.innerHTML = `
        <ol>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
        </ol>
    `
    li_5.innerHTML = '<button>Hello World</button>'
}
