console.log("Hi , I am learning strings and its functions");

let a = "zain";
console.log(a);
console.log(a.length);
console.log(a.at(1));
console.log(a.charAt(2))
console.log(a.concat("abbasi", "nice", "man"))
console.log(a.replace("zain", "Zain Abbasi"))

// Strings are immutable
console.log(a)

let real_name = "zain";
let last_name = "abbasi"
let age = 19;
let info = `My name is ${real_name} ${last_name} and i am ${age} years old young man`;
console.log(info);

console.log(real_name.toUpperCase())
console.log(real_name[0])
// console.log("zain)
let amount = "PLease give me RS 1000";
console.log(amount.slice(18))