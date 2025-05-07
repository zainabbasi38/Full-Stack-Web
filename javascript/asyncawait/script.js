// async function getData() {
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             resolve(455);
//         }, 3000);
//     })
    
// }
// async function getData() {
    
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'  
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         })
//     });  
//       data = await x.json();
//       console.log(data);
//       return 468
    
// }
async function getData() {
    
    let x = await await fetch("https://example.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "example" }),
    });  
      data = await x.json();
      console.log(data);
      return 468
    
}

console.log("Loading modules"); 

console.log("One moretime");
async function main() {
    
    
    console.log("Load data");
    let data = await getData();
    console.log(data);
    
        
    console.log("Process data ");
    console.log("Process data 2");
    
}
main()
// data.then((e) =>{
//     console.log(e)
//     console.log(data);
    
//     console.log("Process data ");
//     console.log("Process data 2");
// })