function hackingSimulating() {
    async function hacking1() {
        return new Promise((resolve) => {
            setTimeout(() => {
                document.getElementsByClassName("div1")[0].innerHTML = "Initializing Hacking...";
                resolve();
            }, 3000);
        });
        
    }
    
    setTimeout(() => {
        document.getElementsByClassName("div2")[0].innerHTML = "Hacking in progress...";
    }, 6000);
    setTimeout(() => {
        document.getElementsByClassName("div3")[0].innerHTML = "Hacking complete!";
    }, 9000);
    
}
async function main() {
    await hacking1();
    
}
hackingSimulating();