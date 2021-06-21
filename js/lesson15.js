// Работа с формами
let data = []
let main = document.querySelector('main')
let form = document.forms.add_article

form.onsubmit = () => {
    event.preventDefault()

    let fm = new FormData(event.target)
    let obj = {}

    fm.forEach((a, b) => {
        obj[b] = a
    })

    obj.id = +Math.random().toString().slice(2, 9)
    obj.time = new Date().toLocaleTimeString()
    obj.date = new Date().toLocaleDateString()

    data.push(obj)
    reload_interface()
}

// Меняется
let reload_interface = () => {
    main.innerHTML = ''
    // Показать элементы в HTML
    for (let item of data) {
        let div = document.createElement('div')
        let div_inside = document.createElement('div')
        let h3 = document.createElement('h3')
        let span = document.createElement('span')
        let i = document.createElement('i')
        let p = document.createElement('p')
        let button = document.createElement('button')
        let button_delete = document.createElement('button')

        div.setAttribute('id', item.id)
        button.setAttribute('onclick', 'manage_item("edit")')
        button_delete.setAttribute('onclick', 'manage_item("delete")')
        div.classList.add('item')
        div_inside.classList.add('img')
        div_inside.style.backgroundImage = `url(${item.image})`

        h3.innerText = item.title
        span.innerText = item.date + ', '
        i.innerText = item.time
        p.innerText = item.text
        button.innerText = 'Edit article'
        button_delete.innerText = 'Delete article'

        div.append(div_inside, h3, span, i, p, button, button_delete)
        main.append(div)
    }
}

let manage_item = (arg) => {
    let id = event.target.parentNode.id
    // Поиск в базе по ID
    let find = data.filter(item => item.id == id)[0]
    let idx = data.indexOf(find)

    if(arg == 'delete') {
        data.splice(idx, 1)
    } else if(arg == 'edit') {
        data[idx].title = prompt('Новый текст')
    } else {
        console.error('Действие не найдено');
    }

    // Перезагрузка страницы
    reload_interface()
}


