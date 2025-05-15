
const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.appendChild(div)
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        },  timeout * 1000)
    },)
} 
async function main() {
    
    setInterval(() => {
        let last = document.body.lastElementChild
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
            
        }
        last.innerHTML =last.innerHTML +  "."
    }, 400);

    let text = [
        "Initialized hacking",
        "Reading your files",
        "Password files detected",
        "Sending all files and password to server",
        "Cleaning Up",
    ]
    for (const item of text) {
        await addItem(item);
        
    }
    
    
    
}
main()