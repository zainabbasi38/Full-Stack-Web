// console.log("Give random color and background to anyone")
// const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];  
// const randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];

// // document.body.style.color = randomColor;    
// // document.body.style.backgroundColor = randomBackgroundColor;

// document.body.querySelector(".container").lastElementChild.style.color = randomColor;
// document.body.querySelector(".container").lastElementChild.style.backgroundColor = randomBackgroundColor;


    console.log("Give random color and background to one random box");

    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

    const boxes = document.querySelectorAll(".box"); // Select all boxes
    const randomBox = boxes[Math.floor(Math.random() * boxes.length)]; // Pick one random box
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];

    randomBox.style.color = randomColor;
    randomBox.style.backgroundColor = randomBackgroundColor;
