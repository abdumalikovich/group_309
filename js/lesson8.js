let arr = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [] // 3-7

for(let item of arr) {
    if(item > 3 && item < 7) arr2.push(item)
}

arr2 = arr.filter((item) => item > 3 && item < 7)

console.log(arr2)
