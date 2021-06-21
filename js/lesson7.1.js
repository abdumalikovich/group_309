// Функции и их параметры

// Объявление функции
let func = () => {
    console.log('hello')
}

// Вызов функции
func()

// Параметры функции
let func_2 = (arg1, arg2, arg3) => {
    console.log(arg1 + arg2)
}

func_2(1, 2) // параметры/аргументы
func_2(10, 50)

let check_age = (arg1) => {
    if (arg1 >= 18) console.log('Welcome')
    else if (arg1 < 18 && arg1 > 0) console.log('Go home')
    else console.log('Stupid')

    console.log(arg1)
}
let ask = 10

check_age(ask)

let min = (p1) => {
    Math.max(p1)
}

// Вернуть минимальное значение из параметров

let a = 10

min([a, 1, 1, 23, 12, 3, 123, 2, 3]) // 2
min([1, 1, 23, 12, 3, 123, 213, 123]) // 123
