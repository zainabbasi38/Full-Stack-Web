// Business name generater

function adjectives() {
    let a = "Crazy";
    let b =" Amazing";
    let c=" Fire";
    let d = Math.floor(Math.random() * 3);
    if (d == 0 ) {
        return a;
    } else if (d == 1) {
        return b;
    } else if (d == 2) {
        return c;
    } 
    
}
function shop_name() {
    let a = "Engine";
    let b= "Foods";
    let c= "Garments";
    let d = Math.floor(Math.random() * 3);
    if (d == 0) {
        return a;
    } else if (d == 1) {
        return b;
    } else if (d == 2) {
        return c;
    }
    
}
function another_word() {
    let a ="Bros";
    let b = "Limited";
    let c= "Hub";
    let d = Math.floor(Math.random() * 3);
    if (d == 0) {
        return a;
    } else if (d == 1) {
        return b;
    } else if (d == 2) {
        return c;
    }
    
}
console.log("Business name: " + adjectives() + " " + shop_name() +" "+ another_word());
// Output: Business name: Amazing Foods Limited