let div = document.createElement("div");
div.innerHTML = "i have been created by <b>zain</b>";
// document.body.appendChild(div);
div.style.backgroundColor = "red";

document.querySelector(".container").before(div);
let cont = document.querySelector(".box");
cont.insertAdjacentHTML("beforebegin"  , "<h1>hello</h1>");
