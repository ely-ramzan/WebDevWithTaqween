// ******************IIFE******************


// (()=>{
//     console.log("IIFE");
// })()


// ******************destructuring******************


// let arr = [0,1,2,3,4,5,6,7,8,9]
// let [a,b,c,d,e,f,...rest] = arr
// // let [a,b,c] = arr
// // let [,,,d,e,f] = arr
// // let [,,,,,,...rest] = arr;
// console.log(a,b,c,d,e,f,rest);

// let a = arr[0];  let b = arr[1];  let [n1,n2] = arr; //s1,s2 == s3 

// let obj = {
//     a:"ali",
//     b:"tahir"
// }

// let {a,b} = obj;
// console.log(a,b);
//var_name == key for object destructuring


// // array to obj:
// let array = [1,2,3]
// let obj1 = {...array}
// console.log(obj1);

// let a1 = (a,b,c) => {
//     console.log(a + b + c);
// }
// a1(...array) //pass as argument 


// let edu = {
//     school:"WCCT",
//     clg : "PGC",
//     uni : "COMSATS",
//     gradesCalculator: ()=>{
//         console.log(90,"%");
//     }
// }

// let edu2 = {...edu,school:"Tarbelian"}
// // //let edu3 = {school:"Tarbelian",...edu} //this wont have an effect
// console.log(edu);
// console.log(edu2);
// // //console.log(edu3);


// let hello = (str)=>{
//     return new Promise((resolve ,reject)=>{
//         setTimeout(()=> resolve(str),
//         2000)
//     })
// }

// (async()=>{
//     let a = await hello("hello")
//     console.log(a);
//     let b = await hello("World!")
//     console.log(b);
// })()


// (() => {
//     setTimeout(
//         ()=>{
//             console.log("Hello\nWorld!");
//         },2000
//     )
// })()

// let calculateAverage = (...array) => {
//     let sum = 0;
//     for(let a of array){
//         sum += a;
//     }
//     return sum/array.length;
// }

// console.log(calculateAverage(2,3,4,5,6));

