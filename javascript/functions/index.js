// #Functions
function sum(a , b) {
    return a + b
    
}

result1 = sum(2 , 4);
result2 = sum(44 , 3);
result3 = sum(45 , 42);
console.log("The sum of two numbers is",result1)
console.log("The sum of two numbers is",result2)
console.log("The sum of two numbers is",result3)

function greetings(name1, name2 , name3) {
    console.log("Hi " + name1 + ", Welcome to java script");
    console.log("Hi " + name2 + ", Welcome to java script");
    console.log("Hi " + name3 + ", Welcome to java script");
    
}

greetings("zain", "ali", "saad")

// Arrow function
const func1 = (name) =>{
    console.log("HI "+name+ ",Welcome back");
}
func1("Zain")


const mean_func = (n1 , n2 , n3 , n4 , n5) =>{
   const mean = (n1 + n2 + n3 + n4 + n5)/ 5
    return mean

} 

average = mean_func(1, 2, 3, 4, 46);
console.log("Mean of five numbers is ", average);