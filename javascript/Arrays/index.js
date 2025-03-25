let arr = [1,2,5,6,8];
console.log(arr);
console.log(arr, typeof arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

//Arrys are mutable
arr[2] = 10;
console.log(arr);
console.log(arr[2]);

// Arrays methods

console.log(arr.toString())
console.log(arr.join(" and "))
console.log(arr.pop())

console.log(arr.push("Hello"));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("Hello"))
console.log(arr);

// Concatination
let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [7,8,9];
console.log(a1.concat(a2, a3));
console.log(a2.concat(a2, a3));

console.log(a1.splice(0 , 2 , 22 , 45))
console.log(a1);
console.log(arr);

console.log(arr.slice(0,3));

