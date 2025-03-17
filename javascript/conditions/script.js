console.log("HEllo i am hello")
let a = 19;
if(a > 18){
    console.log("You are eligible for id card");
}
else{
    console.log("You are not eligible for a id card")
}

// Example
let age = 15;

if(age > 10 && age < 20){
    console.log("Age lie between 10 and 20");
}
else{
    console.log("Age does not lie between 10 and 20");
}

// ?Example 3
let number = 10;

if(number % 2 == 0 && number % 3 == 0){
    console.log("This number is divisible by 2 and 3")
}
else{
    console.log("This number is not devisible by 2 and 3");
}

// Example 4
let num = 10;

if(number % 2 == 0 || number % 3 == 0){
    console.log("This number is divisible by 2 or 3")
}
else{
    console.log("This number is not devisible by 2 or 3");
}

// Alternative
let n = 7;

if(n % 2 == 0 ){
    console.log("This number is divisible by 2 ")
}
else if(n % 3 == 0){
    console.log("This number is divisible by 3")
}
else{
    console.log("This number is not divisible by 2 or 3");
}

