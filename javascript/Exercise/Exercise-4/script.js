
function cardDacuration(title, cName, views, monthsOld, duration, thumbnail) {
    if (views < 1000) {
        views = views;
        
    }
    else if (views > 1000000) {
        views = views / 1000000 + "M";
        
    }
    else {
        views = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}"
            alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="content">
        <h1>${title}</h1>
        <p>${cName} . ${views} views . ${monthsOld} months ago</p>
    </div> `
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

cardDacuration("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

