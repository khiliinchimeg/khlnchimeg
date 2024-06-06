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

// let string = "Hello world"
// let lastString = string.toUpperCase();
// console.log(lastString.substring(6, 9));

// let tour = 'aZZZbZZZc';
// console.log(tour.split('ZZZ'));

// let wer = "deviceName : macbook air -- deviceSerial : FFM3JHQ6L7 ";
// let were = wer.split("--");
// console.log(were[1].replace(":", "="));

// let text = "I love HTML\n";
// let textes = text.replace("HTML", "JAVASCRIPT");
// console.log(textes.repeat(10));

// let challenge = "Comments can Make Code readable";
// let challengeone = "One";
// let challenges = challenge.toUpperCase();
// console.log(challenges.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(8));
// console.log(challenge.includes("script"));
// console.log(challenge.split(''));
// console.log(challenge.split(' '));

// let face = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(face.split(','));

// console.log(challenge.replace("Comments can Make Code readable", "asdfghjkjhgf ewrthnbv"));
// console.log(challenge.charAt(15));
// console.log(challenge.trim());
// console.log(challenge.concat("I love JavaSCRIPT"));

// let home = "Pinecone Academy Leap хөтөлбөр\n"
// console.log(home.repeat(10));

// const random = Math.random() // 0 - 0.99999999999
// const floor = Math.floor(7.8) // 7
// const ceil = Math.ceil(7.1) // 8
// const round = Math.round(7.8) // 8


// const num = Math.random(4);
// console.log("floor" num);

//tentszuuleh
// let a = 10;
// let b = '10';
// console.log("=", a == b)

// let get = "Python";
// let gets = "jargon";
// console.log(get.includes("on"));
// console.log(gets.includes("on"))

// let we = "I hope this course is not full of jargon"
// console.log(we.includes("jargon"));
// const now = new Date();
// console.log("огноо" now.getDate() )
// const year = now.getFullYear()
// const month = now.getMonth()+1;
// const day = now.getDate();
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const sec = now.getSeconds();

// console.log(`Өнөөдөр ${year} оны ${month} сарын  ${date} өдөр  ${hours} цагийн, ${minutes} ${sec}д уншиж байнав`);

//logical
// &&and ||or !not
// 1 == true;
// 0 == false;
// console.log(!(1 || 0 && 1 && 1 || 0));

// console.log(1 || 1 || 0 && 1(1 || 0) && 1);
// console.log(!1 == 0);
// console.log(!0 == 0);
// console.log(!(0 && 1 || 1));


// function student(x, y )    
//                                                    )
// const age = 4
// const gender = " female " // 8r angiin emegtei suragch

// if (18 > age &&  6 > age && gender === "male") {
//     console.log(`${age - 5}r angiin eregtei suragch`)
// } else
// if (18 <age && gender === "womens") {

// }

// console.log(age(18));


// function student(age, gender) {
// if (age<=6 && age<=17 && gender == "eregte") {
//    console.log(`${age-5}-r angiin eregtei suragch`)
// }else
//     if (age<=6 && age<=17 && gender =="emegte") {
//         console.log(`${age-5}-r angiin emegte suragch`)
//     }else
//         if (age<=6 && age<=17 gender == "ghhhyy") {
//           console.log(`${age-17}-iin omno suruulia togsson baina`)

//          }
// }






// function  well(w,r,f) {
//    if(2<w){
//     return("tegsh")
//    }else{
//     if (2-1<r){
//         return("sondgoi")
//     }else{
//         if (f)
//     }
//    }
// }




//push pop
// const numbe = [1, 3, 5.5, 4, 7,100];
// let well = numbe.pop();
// let  wells = numbe.push(4)
// console.log("Numbers", numbe );

//for loop
// function count(n) {

//    for (let i=1; i<=n; i=i+2) { 
//     console.log(i)
//    }
// }
// count(5);

//array
// function qwe(n) {
//       const ara = [];

//       for (let i=1; i <= n; i++) {
//         ara.push(i);
//         console.log("loop", ara);
//       }
//       return ara;
// }

// const h = qwe(5);
// const k = qwe(10);
// console.log(qwe)

//reverse
// function qwe(n) {
//     const ara = [];

//     for (let i=n; 0<i; i--) {
//       ara.push(i);
//       console.log("loop", ara);
//     }
//     return ara;
// }

// const h = qwe(5);
// const k = qwe(10);
// console.log(qwe);

// const g = [1, 5, 2, 7, 13, 4,];

// function printArr(arr) {
//    for(let i=0; i < arr.length; i++ )
//     console.log(arr[i])
// }

// printArr(g);

//tegsh sondgoi
// const g = [1, 5, 2, 6, 7, 13, 4,];
// function numberOfEvent(arr) {
//     let count = 0;

//   for (let i = 0; i<arr.length; i++){
//     if (arr[i] % 2 ===0) {
//         count++;
//     }
//   }
//   return count;
// }
// const numberOfEvents = numberOfEvent(g);
// console.log(numberOfEvents);


//for-davtalt

//max
// const k = [1, 45, 23, 6789,2,1];
// function max(arr) {
//    let maxnumber = 0
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > maxnumber )
//             {
//                 maxnumber = arr[i]
//             }
//     }

//     return maxnumber
// }
// const result = max(k)
// console.log(result)


// const max = (arr) => {
//     let maxnumber = arr[0];

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > maxnumber )
//             {
//                 maxnumber = arr[i]
//             }
//     }
//     return maxnumber
// } 

// const result = max(k)
//  console.log(result)



//let i = 4 > 3;true


// 2.Өгөгдсөн тоо нь 5-д хуваагддаг үгүйг шалгана уу.

//oguulber
// let person = {
//     firstName: "Khiliinchimeg",
//     lastName: "Baasantsogt",
//     age: "20",
//      head: {
//         hair: "black",
//      },
//     skill: ["html", "css", "js"],
//     isMarried: "gerleegui",
//     gender: "female",
//     }


// let myName =  ` намайг ${person.firstName} гэдэг. Би ${person.age} настай. Гэрэлсэн эсэх ${person.isMarried}. Үсний өнгө ${person.head.hair}. Одоогоор Pinecone-д ${person.skill} суралцаж байна. `
// console.log(myName)


// const countOccurrence = (arr) => {
//     const counts = {};
//    for (let i = 0; i<arr.lenght; i++){
//     const num = arr [1];
//     if (counts[num] !==undefined) {
//         counts[num] = 1;
//     }
//    }
//    return counts;
// }
// const a = [1, 1, 1, 3, 3, 2, 2, 22, 5, 77]
// console.log(countOccurrence(a))


// Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// let a = [2, 4, 5, 56, 76, 123, 9, 45]
// const could = (arr) => {
// let coulds = 0;
//   for (let i = 0; i <arr.length; i++){
//     coulds += arr[i];

//   }
//   return coulds;
// }
//  const result = could(a)
//   console.log(result)


// Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.
//   let b = [-1, -5, 2, 7, 8, 6]
//   const sum = (arr) => {
//     let sumOne = 0;
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i > 0]); 

//       }
//       return sumOne;
//   }

//   const results = sum(b);
//   console.log(results);


//    1 Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// let a = [34, 4, 5, 7, 12, 2]

// const one = (arr) => {
//     const oneOne = [];

//     for (let i = 0; i < arr.length; i++) {
//         oneOne.push(arr.length -i);
//         // one.push()
//     }

//     return oneOne;
// }
// const result = one(a);
// console.log(result);


//  2 Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа
// let b = [1, 34, 4, 5, 7, 12, 2]

// const too = (arr) => {
//     let toos = 0;
//     for (let i = 0; i < arr.length-1; i++) {
//         if(arr[i] > toos[i] )
//           toos = arr[i]
          

//     }
//     return toos
// }
// const results = too(b);
// console.log(results);


//  2 Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа
// const countTops = (arr) => {
//   let tops = [];

//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       tops.push(arr[i]);
//     }
// }

//   if (arr[0] > arr[1]) {
//     tops.push(arr[0]);
//   }

//   if (arr[arr.length - 1] > arr[arr.length - 2]) {
//     tops.push(arr[arr.length - 1]);
//   }

//   return tops;
// }

// console.log(countTops([5, 2, 6, 1, 7, 9]));


// 3. Өгөгдсөн массивийн бүх хосыг хэвлэ


// 4. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
      
// const printPairs = (arr, target) => {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//           console.log(`${arr[i]} + ${arr[j]} = ${target}`);
//         }
//       }
//     }
    
//   };
  
//   printPairs([5, 2, 6, 7, 1], 8);


// 5. Өгөгдсөн 2 массивийн огтлолцлыг ол
    //  let too = [3, 5, 12, 7, 14, 8];
    //  let toonud = [4, 2, 12, 3, 7, 9];
    //  let toon = [];
    //  const niilber = (arr, arro ) => {
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let k = 0; k < arro.length; k++ ) {
    //             if (arr[i] === arro[j]){
                
    //             toon.push(arr.ligth[i])
                
    //             }
    //         }
    //     }
    //     return too toonud;
    //  }

    //  const results = niilber(too, toonud);
    //   console.log(results);
  

// 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
//  let sorog = [1, -2, -5, 4, 6, -3, 7];
 
//  const niilbers = (arr) => {
//     let j = 0 ;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0){
//             let t = arr[j];
//             arr[j] = arr[i];
//             arr[i] = t;
//             j++;
//         }
//     }
//     return sorog
//     }
// const result = niilbers(sorog);
// console.log(result);

// 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// let  nemeh = [8, 9, 2, 3, 4, 6, 7];

// const eyreg = (arr) => {
//     let niilberruud = 0;
//     let maxnumber = arr[0];
//     let mixnumbers =arr [0];
//     let niilber = 0;
    
//         for(let i = 0; i < arr.length; i++){
//             niilberruud = niilberruud += arr[i];
//             if(arr[i] > maxnumber )
//                 {
//                     maxnumber = arr[i];
//                 }
                
//                 if(arr[i] < mixnumbers ){
//                     mixnumbers = arr[i];
//                 }
//             }
//             niilber  = maxnumber + mixnumbers ;
//             er = (niilber * (arr.length + 1)) / 2;
//             ers = er - niilberruud;
//             return ers;
//         }
    
            
        
        

// const results = eyreg(nemeh);
// console.log(results);

   

// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол index дугаарыг нь, байхгүй бол -1 буцаа
// let too = [2, 3, 45,  6,  8, 9];
// // let mass = 0; 
// const  sorog = (arr, arrOne) => {
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] === arrOne) {
//             return i;
//     }
// }
//     return -1;
// } 
// const results = sorog(too);
// console.log(results);


// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//  Жич: 1 2 3 4 5 -> 5 1 2 3 4
// let too = [1, 2, 3, 4, 5];
// const toonud = (arr) => {
//     for (let i = arr.length-2; i>=0; i--) {
//         const temp = arr[i+1];
//         arr[i + 1] = arr[i];
//         arr[i] = temp;
//     }
//     return arr
// } 
// const result = toonud(too);
// console.log(result)


// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа



// 4. grades
// let qw = [56, 68, 48, 13]
// const e = (arr) => {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i]> 40 && arr[i]%5 >=3){
//             let uldegdel = arr[i]%5
//             newArr.push((arr[i] - uldegdel) + 5) 

//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// const result = e(qw);
//  console.log(result);


// var removeEventListener = function (nums) {
    
// for(var i=0; i = nums.length-1; i--){
//    if (nums[i] === nums[i-1]) {
//     nums.splice(i, 1);//utguudiig toolno davhar too bval 1 eer avna.
//    }
// }
// return nums;
// }
// console.log(removeEventListener([0, 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4]))

// var removeElements = function()



// const findOperator = (phoneNumber) => {
//     const firstTwo = phoneNumber.slice(0,2);
// switch (firstTwo) {
//     case "99":
//     case "95":
//     case "94":
//     case "85":
//         return "Mobicom";
//     case "88":
//        return "Unitel";
//     case "90":
//         return "G Mobile";
//     case "96":
//         return "skytel";
//     default:
//         return "invalid number";

// }
// }
// console.log(findOperator("349"))

// for (let i = 0; i < 10; i++) {
    
//     if(i ===3) 
//         continue;  ogogdson too algasaad  urgejluulne
//     console.log(i)
// }


// for (let i = 0; i < 10; i++) {
    
//     if(i ===3) 
//         break; ogodson too hurtel yvna
//     console.log(i)
// }

          // in index
          // of element


    //       const arr = [1, 4, 6, 67, 9];
    //       for(const el of arr);
    //    console.log(arr[el]);


    // const arr = [1, 2, 3, 4, 5, 6, 7];
    // const arr2 = [
    //     [1, 2, 3, 4],
    //     [5, 6, 7, 8],
    //     [9, 10, 11, 12],
    //     [13, 14, 15, 16],
    // ]
    // const printDiagonal = (arr) =>{
    //     for(const i in arr){
            // console.log(arr2[i] [arr.length - 1 - i]); //diagnalaar ni gargaj irh 4 7 10 13
            // console.log(arr.length - 1 - i)        //elememt
            // console.log(arr2[i].length - 1 + i)
//         }
//     };


//    printDiagonal(arr2)


// var buildArray = function (nums){
//     ans = [];
//     for(i = 0; i < nums.length; i++);
    
// }dutuu 



    //6sariin4nd 
               //CALLBACK//


// function print(val) {
//     console.log(print)
// }
// function useCallback (callback) {
//     callback("hello" )
// }
// useCallback(print);

// let names = ["Baagii", "Boogii", "eegii"];
// names.forEach((name) => console.log(name));



// const useForEach = (arr, callback) => {
//    for(i = 0; i < nums.length; i++) {
//     let element = arr[i];
//     if(i === 1) return;
//     callback(element);
//    }
    
// }
// useForEach(arr, console.log);

// const g = names.forEach((g) =>{
//     console.log
// });


// useForEach(names, (name) =>{
//     const a = name + ", hello";
//     console.log(a)
// })


      //elements 
// let a= [1, 4, 5, 96, 8, 3]
// const findMax = (arr) => {
//     let max = arr[0];

//     arr.forEach((el) => {
//       if (el > max) {
//         max = el
//       }
//     });

//     return max;
// };
// console.log(findMax(a))

        //index     hamgiin ih too hurtelh indekts         //array  dahij oGc bolno
// const findMax = (arr) => {
//     let max = arr[0];

//     arr.forEach((el, index) => {
//       if (el > arr[max]) {  //<too
//         max = index;
//       }
//     });

//     return max;
// };
// console.log(findMax([1, 5, 5, 96, 8777, 3]))

// let array = [2, 4, 5, 6, 7];
// let element = array.map((el) =>{
//   return el * 2;
// })
// console.log(element);


// 4. grades
// let qw = [56, 68, 48, 13]
// const e = (arr) => {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i]> 40 && arr[i]%5 >=3){
//             let uldegdel = arr[i]%5
//             newArr.push((arr[i] - uldegdel) + 5) 

//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// const result = e(qw);
//  console.log(result);

// let a =[46, 67, 53, 78, 78];

//     let newArr = [];
//     let element = grades.map((grade) => {
//      if (grade < 38) {
//         return grade;
//      }else if (grade % 5 >= 3) {
//         return grade + 5 - (grade % 5) +5;
//      }else{
//         return grade
//      }
//     })
//     console.log(newArr(a))


// const arr = [1, 2, 3, 4 ,5, 6, 7];
// const filterredArray = arr.filter((el) => {
//     return el % 2 === 1;
// });
// console.log(filterredArray);



//   6sariin 5            SORT


//   1 bubble sort
         //tsegtsgui toog eremleh  bgaas ih ruu
//  const arr = [5, 49, 38, 8, 1, 10];

// const swap = (arr, i, j) => {                   //i = 0       j = 2 toogii ni solini ih bga ru
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp; 
// }

// const bubbleSort = (arr, i, j) => { 
// for(i = 0; i <arr.length; i++){
//     for(j = 0; j < arr.length -i -1; j++){
//     if(arr[j] > arr[j+1]) {
//         swap(arr, j, j+1)
//     }
//   }
// }
// }
// bubbleSort(arr)
// console.log(arr);


//   2 findminindex
const arr = [5, 49, 38, 8, 1, 10];
const findMininDex = (arr, start) => {
    let minInDex = start;//start hdess ni ehleh vee
{
    for (let i = start + 1; i <arr.length; i++) {
        if(arr[i] < arr[minInDex]) {
            minInDex = arr[i];  //bga ni
        }
    }
    return minInDex;
}

const selectionSort = (arr) =>{
    for (let i = start + 1; i <arr.length; i++) {
       let minInDex = findMininDex(arr, i);
   swap(arr, i, minInDex)
}
}
}
findMininDexx(arr)
console.log(arr);

// const findMinIndex = (arr, start) => {
//  let minIndex = start;
//  for (let i = start + 1; i < arr.length; i++) {
//  if (arr[i] < arr[minIndex]) {
//  minIndex = i;
//  }
//  }
//  return minIndex;
// };
// const selectionSort = (arr) => {
//  for (let i = 0; i < arr.length; i++) {
//  let minIndex = findMinIndex(arr, i);
//  swap(arr, i, minIndex);
//  }
// };
// findMinIndex(3, )
// console.log(arr)




// const insertionSort = (arr) => {
//  for (let i = 1; i < arr.length; i++) {
//  let key = arr[i];
//  let j = i - 1;
//  while (j >= 0 && arr[j] > key) {
//  arr[j + 1] = arr[j];
//  j--;
//  }
//  arr[j + 1] = key;
//  }
// };



// const arr = ["qw", "asd", "wertsc", "werw"];
// console.log("Before sort:", arr);

// // arr.sort((a, b) => a.length - b.length );
// arr.sort((a, b) =>{
//     if(a > b) return 1;
//     if(a < b)  return -1;
// })
// console.log("After sort: ", arr)