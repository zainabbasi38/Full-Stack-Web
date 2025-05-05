


let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a < 0.5) {
        reject("You are rejected");
    }
    else {
        setTimeout(() => {
            console.log("Success")
            resolve("Promise 1 resolved");
        }, 3000);

    }
})
let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if (a < 0.5) {
        reject("You are rejected");
    }
    else {
        setTimeout(() => {
            console.log("Successfully again")
            resolve("Promise 2 resolved");
        }, 3000);

    }
})

// prom2.then((e) =>{
//     console.log(e);
// }).catch((e) =>{
//     console.log(e);
// })
// prom1.then((e) =>{
//     console.log(e);
//     // console.log(a)
// }).catch((e) =>{
//     console.log(e);
// })


// promise API

let p3 = Promise.resolve([prom1, prom2])
p3.then((e) =>{
    console.log(e);
}).catch((e) =>{    
    console.log(e);
})

// let p1 = new Promise((resolve, reject) =>{
//     // resolve("Promise 1 resolved");
//     reject("Promise 1 rejected");

// })
// p1.then((e)=>{
//     console.log(e)
// }).catch((e) =>{
//     console.log(e)  
// })
