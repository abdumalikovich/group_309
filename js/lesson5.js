// Объекты
// let car = 'Malibu 2 Premiere'
// let car = {
//     name: 'Malibu 2 Premiere',
//     hp: 250,
//     isNew: true,
//     run: 25,
//     salon: [
//         'kojani',
//         'litoy disk'
//     ],
//     engine: {
//         weight: 200,
//         obyom: 2.5
//     }
// }

// let obj = {
//     a: 1,
//     b: {
//         a: 10,
//         b: 20
//     },
//     c: 3
// }

// Чтение
// console.log(obj.b + obj.c)
// Добавление
// obj.d = 4
// obj.e = 5
// Изменение
// obj.a = 10
// Удаление
// delete obj.c

// console.log(obj);

// ЗАДАНИЕ 1. Работа с поиском
// Найти HELLO WORLD IT IS ME
// let obj = {
//     a: 'HELLO',
//     b: {
//         a: {
//             a: 'wrong',
//             b: 'wrong',
//             c: 'wrong',
//             d: 'wrong',
//             e: 'WORLD'
//         }
//     },
//     c: {
//         a: {
//             a: {
//                 a: 'IT IS',
//                 b: 'wrong',
//                 c: ['ME']
//             }
//         }
//     }
// }

// obj.a + obj.b.a.e + obj.c.a.a.a + obj.c.a.a.c[0]
// obj.a + obj.b.a.e + obj.c.a.a.a + obj.c.a.a.c x2
// obj.a + obj.b.a.e + obj.c.a.a.a + obj.c[0] x1

// ЗАДАНИЕ 2. Работа с поиском
// Найти HELLO WORLD IT IS ME
// let obj = {
//     key: ['HELLO', true, false, {
//         a: 'WORLD',
//         b: 'wrong'
//     }],
//     key2: {
//         a: {
//             hello: ['IT IS']
//         }
//     },
//     key3: {
//         a: [{}, {}, {}, 'ME']
//     }
// }

// console.log(obj.key[0] + obj.key[3].a + obj.key2.a.hello[0] + obj.key3.a[3]);

// obj.key[0] + obj.key[3].a + obj.key2.a.hello + obj.key3.a[3]
// obj.key[0].a + obj.key2.a.hello[0] + obj.key3.a[3]
// obj.key[0].a + obj.key.a + obj.key2.hello[0] + obj.key3.a[3]

// let obj = {
//     a: ['a', 'a', 'HELLO', parseFloat(1 + '4'), {
//         a: ['a', 'a', 'a'], d: 'IT IS',
//     }],
//     b: ['b', 'b', parseFloat(1 + '4'), {
//         b: ['b', 'b', 'b'], f: 'WORLD'
//     }],
//     c: ['c', 'c', parseFloat(1 + '4'), {
//         z: 'Lore, ipsum dolor sit', a: ['sit'], c: ['c', 'c', 'c'],
//     }],
//     d: ['d', 'd', parseFloat(1 + '4'), {
//         d: ['d', 'd', 'd'], q: ['help me, please']
//     }],
//     e: ['e', 'e', parseFloat(1 + '4'), {
//         e: ['e', 'e', 'e'], b: [1, 2, 3, 4, 5, 6, [{a:[{b:['not', 'ME', 'wrong']}]}]]
//     }],
// }

// console.log()

// console.log(obj.a[2] + obj.b[3].f + obj.a[4].d + obj.e[3].b[1].b[1])
// console.log(obj.a[2] + obj.b[5] + obj.a[5] + obj.e.b[1])
// console.log(obj.a[2] + obj.b[3].f + obj.a[4].d)

// let car = { 
//     a: 1,
//     b: 2,
//     c: 3
// }

// let arr_keys = Object.keys(car) // ключи
// let arr_values = Object.values(car) // значения
// let arr_entries = Object.entries(car) // все сразу

// console.log(arr_keys)
// console.log(arr_values)
// console.log(arr_entries)

let arr = ['hello world', 1, 2, true, {a: 1}, ['x', 'y', 'z']]

// console.log(arr.includes(['x', 'y', 'z']))
console.log(arr.indexOf(5))
console.log(arr.includes(5))
