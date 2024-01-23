// // random joke picking app:

// let jokes_array = ["My wife told me to stop impersonating a flamingo. I had to put my foot down",
// "I went to buy some camo pants but couldn’t find any.",
// "I failed math so many times at school, I can’t even count.",
// "I used to have a handle on life, but then it broke.",
// "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me",
// "My wife told me to stop impersonating a flamingo. I had to put my foot down x2",
// "I went to buy some camo pants but couldn’t find any. x2",
// "I failed math so many times at school, I can’t even count. x2",
// "I used to have a handle on life, but then it broke. x2",
// "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me x2",
// ]
// const randomChoose = () => {
//     return jokes_array [Math.floor(Math.random() * (jokes_array.length - 1))]
// }
// let elem = document.getElementById("joketext")
// elem.innerHTML = randomChoose()

// *************************callback*************************:

// function loadScript(src,callback){
//     let elem = document.createElement('script')
//     elem.src = src
//     document.body.append(elem)
//     script.onload(() => {
//         callback(null,src)
//     })

//     script.onError(function(){
//         console.log('got an error');
//         callback(new Error('failed'),src)
//     })

// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",function(src){
//     alert('done donaa done dun')
// })

// loadScript("https://cdn.jsrrrdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",function(error,src){
//     if(error)
//         console.log(`Error! ${error}`);
//     alert('done donaa done dun')
// })

// *************************promises:*************************

// let promises = new Promise(function(resolve,reject){
//     console.log("Hello from promise");
//     resolve(100)
// })

// console.log(promises);

// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(
//         () => {
//             console.log("i am set time out 1");
//             resolve(100)
//             reject(new Error("error from promise 1"))
//     },3000)
// })

// promise1.then(
//     (value) => {console.log(value)},
//     (error) => {console.log(error);}
// )

// promise1.then(alert,alert)

// function loadScript(src) {
//     return new Promise(function (resolve, reject) {
//         let script = document.createElement('script');
//         script.src = src;
//         document.body.append(script);

//         script.onload = function () {
//             resolve(true);
//         };

//         script.onerror = function () {
//             reject(new Error("Could not load script"));
//         };
//     });
// }

// let promiseLoadScript = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");

// promiseLoadScript.then(function () {
//     console.log("Script loaded successfully");
//     return new Promise(
//         (resolve,reject) => {
//             console.log("i'm in promise 2");
//             resolve("P2")
//         })
// }, function (error) {
//     alert(error.message);
// }).then(
//     function (value){
//         console.log(value);
//         return("P3")
//     }
// ).then(alert)

// *************************random joke from JOKE API *************************

// let arrayOfJokes =  [
//     {
//         "category": "Pun",
//         "type": "twopart",
//         "setup": "What do Asian people call fingers?",
//         "delivery": "Limb Limbs.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": true,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 95,
//         "safe": false,
//         "lang": "en"
//     },
//     {
//         "category": "Dark",
//         "type": "twopart",
//         "setup": "What's the difference between a phone and a black person?",
//         "delivery": "A phone is actually useful.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": true,
//             "sexist": false,
//             "explicit": false
//         },
//         "safe": false,
//         "id": 309,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 123,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Dark",
//         "type": "twopart",
//         "setup": "What's yellow and can't swim?",
//         "delivery": "A bus full of children.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "safe": false,
//         "id": 310,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "twopart",
//         "setup": "What's the object-oriented way to become wealthy?",
//         "delivery": "Inheritance.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 46,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "single",
//         "joke": "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 28,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Pun",
//         "type": "twopart",
//         "setup": "What happens when you don't obey the KGB?",
//         "delivery": "You get Putin jail.",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": true,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 70,
//         "safe": false,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "twopart",
//         "setup": "Why is 6 afraid of 7 in hexadecimal Canada?",
//         "delivery": "Because 7 8 9 A?",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 7,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Christmas",
//         "type": "twopart",
//         "setup": "Who hides in the bakery at Christmas?",
//         "delivery": "A mince spy!",
//         "flags": {
//             "nsfw": false,
//             "religious": false,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": false
//         },
//         "id": 250,
//         "safe": true,
//         "lang": "en"
//     },
//     {
//         "category": "Programming",
//         "type": "twopart",
//         "setup": "How do you know God is a shitty programmer?",
//         "delivery": "He wrote the OS for an entire universe, but didn't leave a single useful comment.",
//         "flags": {
//             "nsfw": false,
//             "religious": true,
//             "political": false,
//             "racist": false,
//             "sexist": false,
//             "explicit": true
//         },
//         "id": 19,
//         "safe": false,
//         "lang": "en"
//     }
// ]

// let a = function(){
//     return arrayOfJokes[Math.floor(Math.random() * (arrayOfJokes.length - 1))]

// }

// // console.log(Math.floor(Math.random() * (arrayOfJokes.length - 1)));

// let para = document.getElementById("joketext")
// para.innerHTML = a().joke

// *************************nested then with loadscript*************************

// function loadScriptUsingPromises(src){
//     return new Promise(
//         (resolve,reject) => {
//             let script = document.createElement('script')
//             script.src = src
//             document.body.appendChild(script)

//             script.onload = () => {
//                 resolve("promise successful")
//             }

//             script.onerror = () => {
//                 reject("sheeet")
//             }
//         }
//     )
// }

// let promiseFromFunc = loadScriptUsingPromises("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")

// promiseFromFunc.then(
//     (value) => {
//         console.log(value);
//         return "newDummyScript.js"
//     }
// ).catch((error) => {
//     console.log(error);
// }).then(console.log('new script ready sir'))

// //*************************all,allSettled,race,any:*************************

// let p1 = new Promise(
//     (resolve,reject) => {
//         setTimeout(
//             () => {
//                 console.log("i am 1");
//                 resolve(1)
//                 reject("error")
//             },1000
//         )

//     }
// )

// let p2 = new Promise(
//     (resolve,reject) => {
//         setTimeout(
//             () => {
//                 console.log("i am 2");
//                 resolve(2)
//                 reject("error")
//             },Math.floor(Math.random()*4000)
//         )

//     }
// )

// let p3 = new Promise(
//     (resolve,reject) => {
//         setTimeout(
//             () => {
//                 console.log("i am 3");
//                 resolve(3)
//                 reject("error")
//             },5000
//         )

//     }
// )

// let p_arr1 = Promise.all([p1,p2,p3])
// p_arr1.then(
//     values => {console.log("all:" + values)}
// )

// let p_arr2 = Promise.allSettled([p1,p2,p3])
// p_arr2.then(
//     values => {console.log("all settled:" + values)}
// )

// let p_arr3 = Promise.race([p1,p2,p3])
// p_arr1.then(
//     values => {console.log("race:" + values)}
// )

// let p_arr4 = Promise.any([p1,p2,p3])
// p_arr4.then(
//     values => {console.log("any:" + values)}
// )

// ************************:async/await8:*************************

// async function usingBothConceptsTogether(){

//     let p1 = new Promise(
//     (resolve,reject) => {
//         setTimeout(
//             () => {
//                 console.log("i am 1 from promise 1");
//                 resolve(1)
//                 reject("error")
//             },1000
//         )
//         }
//     )

//     let p2 = new Promise(
//         (resolve,reject) => {
//             setTimeout(
//                 () => {
//                     console.log("i am 2 from promise 2");
//                     resolve(2)
//                     reject("error")
//                 },Math.floor(Math.random()*4000)
//             )

//         }
//     )

//     console.log("waiting for p2");
//     let b = await p2
//     console.log("p2:" + b);

//     console.log("waiting for p1");
//     let a = await p1
//     console.log("p1:" + a);

//     return [a,b]
// }

// usingBothConceptsTogether().then(
//     (value) => {console.log(value)}
// )

// *****************error handling*********************

// const func =  () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject("error");
//         },3000)
//     })

// }

// let func2 = async () => {
//     try{
//         let result = await func();
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }

// func2()


////////////////////// problem=>>>>>>

// let p1 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("i am 1");
//       resolve(1);
//       reject("error");
//     }, 1000);
//   });
// };

// let p2 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("i am 2");
//       resolve(2);
//       reject("error");
//     }, Math.floor(Math.random() * 4000));
//   });
// };

// let p3 = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("i am 3");
//       resolve(3);
//       reject("error");
//     }, 5000);
//   });
// };

// const funcAll = async () => {
//   console.time("run");
//   let all = await Promise.all([p1,p2,p3])
//   console.log(all); // [1,"i am 2",3]
//   console.timeEnd("run");

//   // console.time("run");
//   // let p11 = await p1();
//   // console.log(p11);
//   // let p22 = await p2();
//   // console.log(p22);
//   // let p33 = await p3();
//   // console.log(p33);
//   // console.timeEnd("run");
// };

// funcAll();

