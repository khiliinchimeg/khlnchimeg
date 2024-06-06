const box = document.querySelector(".box");
const [minusButton, plusButton] = document.querySelectorAll(".buttons button");

let num = 0;

box.textContent = num;

minusButton.addEventListener("click", () => {
    num--;
    box.textContent = num;
});

plusButton.addEventListener("click", () => {
    num++;
    box.textContent = num;
});


// const box =document.getElementsByClassName("box") [0] ;

// box.addEventListener("click", () => {
//     if (box.style.backgroundColor ==="red") {
//         box.style.backgroundColor = "black";

//     }else{
//         box.style.backgroundColor = "red";  
//     }
//     box.backgroundColor = "1";
// })
// console.log(box)
