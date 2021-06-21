// Методы работ с простыми типами данных
let a = 'Hello World'

a = a.toUpperCase()
a = a.slice(-3)
a = a.trim()

let b = '10.5'

b = parseInt(b) // 10
b = parseFloat(b) // 10.5
b = Number(b) // 10.5
b = +b // 10.5

console.log(a)

let c = 10.5

c = c.toString()

let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error suscipit atque, architecto cumque, eligendi delectus nesciunt numquam minima beatae sed facilis voluptatibus excepturi iure tempora magni aliquid. Quo iste facilis repellendus molestiae, maxime quae distinctio cupiditate facere natus? Laboriosam voluptatum voluptates cum, nam animi ea et maiores debitis, recusandae deserunt nobis adipisci obcaecati possimus sit, porro iusto voluptatibus incidunt illo consequuntur cumque asperiores excepturi. Deserunt beatae hic quae maiores. Necessitatibus dolore optio fugit, consequuntur sequi neque ipsum consequatur nisi repellat laborum! Voluptate ad adipisci placeat, corrupti, dolorum repellat nisi est consequuntur vitae accusamus et minus provident iure quis voluptatum dolor!'

let c_location = text.slice(text.search('iusto'))

console.log(c_location.slice(0, 5))

let d = text.includes('facere')

console.log(d);

let e = 10.4

console.log(Math.floor(e)) // down
console.log(Math.ceil(e)) // up
console.log(Math.round(e)) // logical

Math.min(1, 4, 5, 10.5, 10 - 2, 3 ** 3) // 1
Math.max(1, 4, 5, 10.5, 10 - 2, 3 ** 3) // 27
Math.pow(2, 10) // 27
3 ** 3

let id = Math.random().toString().slice(2)

console.log(id)

let f = 10.3

console.log(f.toFixed())
