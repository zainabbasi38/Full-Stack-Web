console.log("Hey , i am first")
console.log("Hey , i am second")

setTimeout(() => {
    console.log("Hey , i am who")
}, 3000);


setTimeout(() => {
    console.log("Hey , i am you")
}, 2000);

console.log("Hey , i am third")

const fn = () =>{
    console.log("Hey , i am fn")
}
const callback = (name ) =>{
    console.log("Hey i am callback");
    console.log(name);
    console.log(fn())
}
const loadScript = (src , callback) => {
    const sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Zain");
    document.head.append(sc);
    
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )