let arr = [10, 20, 30]

for(let item of arr) {
    arr[arr.indexOf(item)] = item + 1
}

console.log(arr);
