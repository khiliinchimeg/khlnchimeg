// const box = document.querySelector(".box");
// const [minusButton, plusButton] = document.querySelectorAll(".buttons button");

// let num = 0;

// box.textContent = num;

// minusButton.addEventListener("click", () => {
//     num--;
//     box.textContent = num;
// });

// plusButton.addEventListener("click", () => {
//     num++;
//     box.textContent = num;
// });


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


/* 5sariin 7 */
 const boxes = document.querySelectorAll(".box" > div)
 const restartBtn = document.querySelector(".restart");

let turn = 0;
 boxes.forEach( (box)=> {
    box.addEventListener("clink", () =>{
   if(box.textContent !== "") return;
    box.textContent = turn ? "0" : "x";
    turn = 1 - turn;
    });
 });

restartBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
        box.classList.remove("clicked");
       box.textContent = "";
     }) 
    })



  
  