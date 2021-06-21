let all_tr = document.querySelectorAll('tr')
let table = document.querySelector('table tbody')

// Table 1
// for(let tr of all_tr) {
//     // Нажимаем на кнопку в строке
//     tr.lastElementChild.children[0].onclick = () => {
//         // Второму инпуту ставим значение первого * 2
//         tr.children[1].children[0].value = tr.children[0].children[0].value * 2
//     }
// }

// Table 2
for(let td of table.lastElementChild.children) {
    td.children[0].onclick = () => {
        // Номер элемента при нажатии
        let index = [...table.lastElementChild.children].indexOf(td)
        let total = 0

        for(let tr of table.children) {
            // Находим элементы по номеру
            total += +tr.children[index].children[0].value
            
            console.log(tr.children[index]);
        }
    }
}
