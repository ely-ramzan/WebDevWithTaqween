// // let a = document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling;
// // a.style.color = "red"

// // let c = document.getElementById("nav_bar")
// // console.log(c);
// // console.log(a);

// // console.log(document.querySelectorAll(".navigation")[2]);
// // let d = document.body.lastElementChild.previousElementSibling
// // d.firstElementChild.style.color = "green"
// // d.lastElementChild.style.color = "green"
// // console.log(d);

// // let e = document.getElementsByClassName("par")[0].firstElementChild 
// // e.style.color = "blue"
// // console.log(e);

// // let b = document.getElementsByTagName("li")
// // for(let i of b)
// //     i.style.backgroundColor = "cyan" 




// const generateRandomLetter = () => {
//     let b = Math.floor(Math.random()) + 100
//     if(b >= 70)
//         return 'S'
//     else if (b < 70 && b >30 )
//         return 'W'
//     else
//         return 'G'
// }

// const playGame = () => {
//     let b = prompt("Enter S,W,G")
//     if(generateRandomLetter() == b)
//         alert('Congratulations!')
//     else
//         alert("try again !!!")
// }

// do{
// playGame()
// }while(confirm("Do you want to play again"))