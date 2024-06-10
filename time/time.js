// let count = 0;
// const id = setInterval(() => {
//     count++
//     console.log("hello world");

// if(count === 5 );
// clearInterval(id);
// }, 2000)

// const id = setTimeout(() => {
//     console.log("hello world")
// })

const time = document.querySelector('.timer')
const startbtn = document.querySelector('.start')
const stopbtn = document.querySelector('.stop')
const resetbtn = document.querySelector('.reset')

let count=0.0;
let id;
let a = true;

startbtn.addEventListener('click',()=>{
    a = true;
    id=setInterval(()=>{
        count+=0.1
        time.textContent=count.toFixed(2)
    },100)
})
stopbtn.addEventListener('click',()=>{
    a = false;
    clearInterval(id)
   
});
resetbtn.addEventListener("click", () => {
    a = false;
    clearInterval(id)
    time.textContent = 0;
    count = 0;
})