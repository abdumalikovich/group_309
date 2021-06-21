// Axios, Postman и работа с API
let add_card = document.forms.add_card
let main = document.querySelector('main')
let arr = []

add_card.onsubmit = () => {
    event.preventDefault()
    
    if(arr.length >= 3) {
        return false
    } else {
        let fm = new FormData(event.target)
        let obj = {}
    
        fm.forEach((value, key) => {
            obj[key] = value
        })
    
        arr.push(obj)
    
        reload()
    }
}

let reload = () => {
    main.innerHTML = ''

    for (let card of arr) {
        let div = document.createElement('div')
        let span = document.createElement('span')
        let div_inside = document.createElement('div')
        let span_2 = document.createElement('span')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let isVisible = true

        div.classList.add('item')
        div_inside.classList.add('bottom')

        img.setAttribute('src', './images/eye.png')
        
        img.onclick = () => {
            if(isVisible) {
                img.setAttribute('src', './images/eye2.png')
                // Меняем текст
                span_2.innerText = card.number.slice(0, 4) + ' **** **** ' + card.number.slice(13, 17)
            } else {
                img.setAttribute('src', './images/eye.png')
                span_2.innerText = card.number
            }

            isVisible = !isVisible
        }

        span.innerText = card.name
        span_2.innerText = card.number
        p.innerText = card.owner

        div_inside.append(span_2, p, img)
        div.append(span, div_inside)
        main.append(div)
    }
}
