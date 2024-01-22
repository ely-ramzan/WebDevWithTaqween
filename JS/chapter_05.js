// let arr = [1,2,3,4,5]

// console.log(arr);
// console.log(arr.length);

// let p1 = arr.pop();
// console.log(arr,p1);

// let p2 = arr.push(78);
// console.log(arr,p2);

// let p3 = arr.shift();
// console.log(arr,p3);

// let p4 = arr.unshift(78);
// console.log(arr,p4);

// // delete arr[2]
// // console.log(arr)

// for(let a = 0;a < arr.length;a ++){
//     console.log(arr[a]);
// }

// let arr1 = [5,6,7,8,9]

// let conArray = arr.concat(arr1);
// console.log(conArray);


// // let compare = (a,b) => {
// //     return b - a
// // }

// // conArray.sort(compare);

// conArray.sort();
// console.log(conArray);
// conArray.reverse();
// console.log(conArray);

// // sort alphabetically as 

// let coll = [11,22,33,44,55]

// coll.forEach(
//     (element) => {
//         console.log(element);
//     }
// )

// let obj1 = {
//     ali : 5,
//     tahir : 10
// }

// let arrFromObject = Array.from(obj1)
// arrFromObject.forEach(
//     (element) => {
//         console.log(element);
//     }
// )

// for(let i of coll){
//     console.log(i);
// }

// for(let i in coll){
//     console.log(i);
// }

// let array1 = [14,88,23,11] 
// let a = array1.map(
//     (value,index,array) => {
//         console.log(value + index);
//         return value - index //returns an array of whatever operation is specified
//     }
// )
// console.log(a);


// let b  = array1.filter(
//     (value , index , array)=>{
//         return value > 20 //if condition is true for element add element to new array
//     }
// )
// console.log(b);

// let c= array1.reduce(
//     (h1,h2,index,array)=> {
//         return h1+h2  //returns a single value after performing operations on array
//     }
// )

// console.log(c);

// practice set 

// let arrrr = []
// let a;
// let i = 0;
// while(a != -1){
//     a = prompt("Enter value for index",i,"or enter -1 to stop")
//     arrrr.push(a)
//     i++;
// }
// arrrr.pop();
// console.log(arrrr);

// let arrayyyy = [1,2,20,232,88,90,210,120]
// let changed_arrayyy = arrayyyy.filter(
//     (value) => {
//         return value % 10 == 0
//     }
// )



// console.log(changed_arrayyy);

// let mapped_array = arrayyyy.map(
//     (value) =>{
//         return value*value
//     }
// )

// console.log(mapped_array);


// let n = prompt("Enter the number you want to calculate the factorial")
// let array7 = []
// for(let i = 1;i <= n;i ++){
//     array7.push(i)
// }

// let factorial = array7.reduce(
//     (v1,v2) => {
//         return v1 * v2
//     }
// )

// console.log(factorial);


// let aa = [11,22,33,44,55,66]
// // aa.splice(2,0,88,77,99)
// // console.log(aa)

// // splice(1:index,2:no of elements to be removed,3:any values you want to add)

// let new_array = aa.slice(2,5)
// console.log(new_array);

// let new_array1 = aa.slice(-2,5)
// console.log(new_array1);

// let new_array2 = aa.slice(-2,-5)
// console.log(new_array2);


// let new_array3 = aa.slice(-5)
// console.log(new_array3);

