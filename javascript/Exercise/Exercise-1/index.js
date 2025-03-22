console.log("Calculator");
let a = 5;
let b = 6;

let operation = "/";
const calculator = (a, b) => {
    if (operation == "+") {
        if (Math.random() < 0.1) {
            console.log(a - b)

        } else {
            console.log(a + b)
        }

    }
    else if (operation == "-") {
        if (Math.random() < 0.1) {
            console.log(a + b)

        }
        else {
            console.log(a - b)
        }

    } else if (operation == "*") {
        if (Math.random() < 0.1) {
            console.log(a / b);
        }
        else {
            console.log(a * b);
        }
    }
      else if (operation == "/") {
        if (Math.random() < 0.1) {
            console.log(a * b)
        }
        else {
            console.log(a / b)
        }
    }
}
calculator(a , b)
// if (operation == "+") {
//     if (Math.random() < 0.1) {
//         console.log(a * b)

//     } else {
//         console.log(a + b)
//     }

// }
