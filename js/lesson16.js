// Работа с API через Axios.js
let arr = []
let main = document.querySelector('main')
let add_new_item = document.forms.add_new_item
let api = 'https://reqres.in/api/products'

axios.get(api)
    .then((response) => {
        arr = response.data.data

        console.log(arr);
        reload()
    })
    .catch((error) => {
        console.log(error)
    })

let reload = () => {
    main.innerHTML = ''

    for(let item of arr) {
        let div = document.createElement('div')
        let h1 = document.createElement('h2')
        let h2 = document.createElement('h2')
        let i = document.createElement('i')
        let p = document.createElement('p')
        let btn_edit = document.createElement('button')
        let btn_delete = document.createElement('button')

        div.id = item.id

        btn_edit.innerText = 'btn_edit'
        btn_delete.innerText = 'btn_delete'

        btn_edit.setAttribute('onclick', 'manage_item("edit")')
        btn_delete.setAttribute('onclick', 'manage_item("delete")')

        div.style.backgroundColor = item.color

        h1.innerText = arr.indexOf(item) + 1
        h2.innerText = item.name
        i.innerText = item.year
        p.innerText = item.pantone_value

        div.append(h1, h2, i, p, btn_edit, btn_delete)
        main.append(div)
    }
}

let manage_item = (arg) => {
    let id = event.target.parentNode.id
    let find = arr.filter(item => item.id == id)[0]
    let idx = arr.indexOf(find)

    console.log(id, find, idx)

    if(arg == 'delete') arr.splice(idx, 1)
    else if(arg == 'edit') {
        arr[idx].color = prompt('Text')
    }

    reload()
}

add_new_item.onsubmit = () => {
    event.preventDefault()

    let fm = new FormData(event.target)
    let obj = {}
    
    fm.forEach((value, key) => {
        obj[key] = value
    })

    obj.id = arr.length + 1

    arr.push(obj)
    reload()
}
