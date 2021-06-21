// let a = 10

// if(a == 13 - 11.1 + 2 - 2.9) console.log('Hello 1')
// else if(a <= 4 && a - 2 > 2) console.log('Hello 2')
// else if(a > 3 || a < Math.ceil(9.9)) console.log('Hello 3')
// else if(a > 3 && typeof('hello') === 'string') console.log('Hello 4')
// else console.log('Hello 5')
// error

// error x2
// 3

// let a1 = 10
// let b1 = 'hello'
// let a2 = a1 * 2
// let b2 = 'world'
// let a3 = a1 / a2
// let b3 = 'bye-bye'
// let a4 = '10'

// if(b1.length >= a1 || b1.slice('hel').length === a1 / a2) console.log('Hello 1')
// else if(b2.length >= Math.ceil(5.001)) console.log('Hello 2')
// else if(a1 + 4 / 4 === Math.round(1.51)) console.log('Hello 3')
// else if(b3.length - 14 - a1 <= 4 / 0.5) console.log('Hello 4')
// else if(b2.slice(0, 4) + +a4 / 4) console.log('Hello 5')
// else if(b2.length + a4.length + (b1.length / 2) <= 10) console.log('Hello 6')
// else console.log('Hello 6')
// 4, 3 x2

// Объекты и массивы
// let arr = [1, 2, 3, 4, 5]

// console.log(arr[0])
// if(arr[0].length >= 5) console.log('hello');
// console.log(arr[0])

// arr.shift() // delete first
// arr.pop() // delete last
// arr.splice(2, 2) // delete item

// let a = 'new element of array for end'
// let b = 'new element of array for start'

// arr.push(a) // to end
// arr.unshift(b) // to start

// let arr = [1, 2, 3, 4, 5]
// arr[0] = arr[0] - arr[1 + 1]
// arr[5] = arr[1 - 1] + arr[5]

// arr.push(14)
// arr.shift()
// arr.unshift(08)
// arr.unshift(12 - arr[3])
// arr[1] = 14 - arr[1]
// arr.splice(0, 3)
// arr.pop()

// console.log(arr);

let arr = []
arr[3] = 8
arr.shift()
arr.push(4 - 2)
arr[5] = 12
arr.shift()
arr[1 - 1] = arr[3] / 2
arr.push(4)
arr.pop()
// [NaN, 8, 2, empty, 12]
arr.slice(0, 2)
arr.unshift(arr[0] + arr[1])

// empty * 3, 8, ., 12, 2
// 8
// 

console.log(arr);




