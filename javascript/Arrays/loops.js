let arr = [1,2,44,5,6,33,89]

// let newArr = [];

// for (let index = 0; index < arr.length; index++) { 
//     const element = arr[index]; 
//     newArr.push(element **2)
    
// }

// console.log(newArr);
// let newArr = arr.map((ew) =>{
//     return ew ** 2
// })

// console.log(newArr)

const greaterThanSeven = (e) =>{
    return e > 7
}

console.log(arr.filter(greaterThanSeven));

const add = (a , b) =>{
    return a + b
}

console.log(arr.reduce(add));