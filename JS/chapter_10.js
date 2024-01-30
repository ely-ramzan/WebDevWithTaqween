 
// *****************************fetch API*****************************

// let a = async() => {
//     return await fetch('https://jsonplaceholder.typicode.com/todos/1');
// }

// let b = document.getElementById("anime");

// a().then(
//     response => {
//         console.log("response.status = " + response.status);
//         console.log("response.ok = " + response.ok);
//         return response.json();
//     }
// ).then(
//     data => {
//         console.log(data);
//         b.innerHTML = data.title;
//     }
// ).catch(error => {
//     b.innerHTML = error;
// })

// // //     fetch('https://animechan.xyz/api/random'); //for animeQuote api




// ************************POST request************************

// const options = {
//             method: "POST",
//             headers:{
//                 "Content-type" : "application/json"
//             },
//             body: JSON.stringify({
//                 title: "ali",
//                 body: "bhai",
//                 userID: 1100
//         })
//         }



// fetch("https://jsonplaceholder.typicode.com/posts",options).
// then(
//     response => response.json()
// ).then(
//     data => {console.log(data);}
// )


// async function toPostRequest(todo){

//     const options = {
//         method: "POST",
//         headers:{
//             "Content-type" : "application/json"
//         },
//         body: JSON.stringify(todo)
//     }
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts",options)
//     let promise = await response.json()
//     return promise
// }


// let getPromise = async ( ) => {
//     let todo = {
//         title: "ali",
//         body: "bhai",
//         userID: 1100
//     }

//     let r = await toPostRequest(todo)
//     console.log(r);
// }

// getPromise()



// let b = async() => {
//     let a = () => new Promise(
//         (resolve,reject) => {
//             setTimeout(() => {
//                 console.log("inside in P");
//                 setTimeout(resolve,3000)
//             }, 3000);
//             console.log("outside in P");
//         }
//     )
    
//     await a()
//     console.log("outside P in b")
//     console.log(a);
// }

// b()

 


// ****************************JS COOKIES:****************************

// console.log(document.cookie); //to get all cookies 

// cookie = K-V;

// document.cookie = "guest_id=al000" //it will add and append all cookies //set call
// document.cookie = "guest_id=ali"  

//if key matches any previous key it will update previous key


// encodeURIComponent(str) //encodes speacial character to some symbols
// decodeURIComponent(str) //decodes to simple speacial character


// ****************************localStorage:****************************
// let key = prompt("enter key")
// let value = prompt("enter value")

// for(let i = 0;i < 5; i ++)
//     localStorage.setItem(key + " " + i,value)

// localStorage.removeItem(localStorage.key(3))

// localStorage.clear() //to clear all data
