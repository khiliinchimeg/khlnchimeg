/*
console.log("hello")

var one = "one class"
let two = " two class"
const three = " three class"

//console.log("Comments can make code readable")
//Comments can make code readable

//console.log("Comments can make code readable")
/*
Comments can make code readable
Comments can make code readable
*/

let string = "Hello world"
let lastString =  string.toUpperCase();
console.log (lastString .substring(6, 9));

let tour = 'aZZZbZZZc';
console.log(tour.split('ZZZ')); 

let wer = "deviceName : macbook air -- deviceSerial : FFM3JHQ6L7 ";
let were = wer.split("--");
console.log(were[1].replace(":","="));

let text = "I love HTML\n";
let textes = text.replace("HTML", "JAVASCRIPT");
console.log(textes.repeat(10));

let challenge = "Comments can Make Code readable";
let challengeone ="One";
let challenges = challenge.toUpperCase();
console.log(challenges.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(8));
console.log(challenge.includes("script"));
console.log(challenge.split(''));
console.log(challenge.split(' '));

let face = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(face.split(','));

console.log(challenge.replace("Comments can Make Code readable", "asdfghjkjhgf ewrthnbv"));
console.log(challenge.charAt(15));
console.log(challenge.trim());
console.log(challenge.concat("I love JavaSCRIPT"));

let home = "Pinecone Academy Leap хөтөлбөр\n"
console.log(home.repeat(10));

const random = Math.random() // 0 - 0.99999999999
const floor = Math.floor(7.8) // 7
const ceil = Math.ceil(7.1) // 8
const round = Math.round(7.8) // 8


// const num = Math.random(4);
// console.log("floor" num);

//tentszuuleh
let a = 10;
let b = '10';
console.log("=", a == b)

let get = "Python";
let gets = "jargon";
console.log(get.includes("on"));
console.log(gets.includes("on"))

let we = "I hope this course is not full of jargon"
console.log(we.includes("jargon"));

const now = new Date();
const year = now.getFullYear()
const month = now.getMonth()+1;
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const sec = now.getSeconds();

console.log(`Өнөөдөр ${year} оны ${month} сарын  ${date} өдөр  ${hours} цагийн, ${minutes} ${sec}д уншиж байнав`);
