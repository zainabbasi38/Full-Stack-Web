let button = document.getElementsByClassName("btn")[0];
// console.log(button)
button.addEventListener("dblclick", (e) => {
    let con = document.getElementsByClassName("content")[0];
    
    con.innerHTML = "I am new here!";

})