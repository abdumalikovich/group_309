// FILTER
// MAP
// FUNCTION RETURNS

let arr = [
    {
        name: 'Milk',
        sale: 4,
        price: '3.25',
        last_prices: [
            4, 8, 14, 11, 18.5
        ]
    },
    {
        name: 'Coffee',
        sale: 10,
        price: '1.5',
        last_prices: [
            3.1, 1.4, 1.44, 5.1
        ]
    },
    {
        name: 'Chocolate',
        sale: 19.6,
        price: '15.5',
        last_prices: [
            1, 1, 1, 1
        ]
    },
]

let arr_filtered = []

for(let item of arr) {
    if(item.price < 15 && item.price > 0) {
        arr_filtered.push(item)
    }
}

arr_filtered = arr.filter(item => {
    item.price < 15 && item.price > 0
})

// MAP
arr.map(item => {
    item.price = +item.price - (+item.price / 100 * item.sale)
    item.average = 0

    item.last_prices.map(price => {
        item.average += price / item.last_prices.length
    })
})

// FUNCTIONS
let func_arr = (arr) => {
    let total = 0
    let total2 = 0

    for(let item of arr) {
        item++
        total += item
        total2 -= item
    }

    return {
        a: total,
        b: total2,
    }
}

let abc = func_arr([1, 2, 3])

console.log(abc);
