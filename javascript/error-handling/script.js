let a = prompt("Enter your first number");
let b = prompt("Enter your second number");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Enter valid number")
    
}
sum = parseInt(a) + parseInt(b);

function main(){
    try {
        // let x = 12;
        console.log("The sum is ", sum*x);
        return true;
    } catch (error) {
        console.log("Error:", error.message);
        return false;
    }
    finally{
        console.log("Everything fetch from API and db")
    }

}
main();