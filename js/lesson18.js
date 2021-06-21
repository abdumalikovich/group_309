let open = document.querySelector('.open')
let menu = document.querySelector('.menu')
let menu_links = document.querySelectorAll('.menu .top a')
let menu_social = document.querySelectorAll('.menu .menu-footer .right-side a')

open.onclick = () => {
    menu.classList.toggle('active')
    let i = 0
    let k = 0

    let show_later = () => {
        let show_social = setInterval(() => {
            menu_social[k].classList.add('active')
    
            k++
    
            if(k >= menu_social.length) clearInterval(show_social)
        }, 100)
    }

    let show_links = setInterval(() => {
        menu_links[i].classList.add('active')

        i++

        if(i >= menu_links.length) {
            clearInterval(show_links)
            show_later()
        }
    }, 200)
}

// close.onclick = () => {
//     menu.classList.toggle('active')
//     bg.classList.toggle('active')
// }

// bg.onclick = () => {
//     menu.classList.toggle('active')
//     bg.classList.toggle('active')
// }

// let inter = setInterval(() => {
//     console.log('Hello i am new interval')
//     clearInterval(inter)
// }, 50)

// let timeout = setTimeout(() => {
//     console.log('INTERVAL END')

//     clearInterval(inter)
// }, 1500)
