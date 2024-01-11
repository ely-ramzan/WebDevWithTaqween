// js is a dynamically typed language.
let a = 7
console.log(a)
a = "ali"
console.log(a)


//var name can start with _ & $ or Letter


// ***********************************************  var vs let vs const:  ***********************************************

var b = 55
console.log(b)
var b = "ali"
console.log(b)
{
    b = "asas"
    var b = true
    console.log(b)
}
console.log(b) //var has a global scope


let c = 8
console.log(c)
// let c = "saas" //cant redeclare let
c = "harry"  // but can re-assign value to it
console.log(c)
{
    // c = ture //let has block scope
    let c = false
    console.log(c)
}
console.log(c)

const  d = 99
console.log(d)
// d = 4 ca't re-assign or re-declare a const value
{
    // d = 99
    const d = "ksks"
    console.log(d)
}
console.log(d) // const also has block scope

// *********************************************** data types: ***********************************************

//PRIMITIVE:

// nn ss bb u
let n1 = 99
let n2 = null
let s1 = "String"
let s2 = Symbol("bros")
let b1 = true
let b2 = BigInt("3333")
let u;

console.log(n1,n2,s1,s2,b1,b2,u)

console.log(typeof u) // to check type of variable

//NON-PRIMITIVE:

// Object having key,value pair:

const items = {
    "John" : 88,
    "Talha" : true,
    "Tahir" : BigInt("22222222222222222222")
 }

console.log(items["Talha"])
console.log(items["not_found"]) // undefined
console.log(items)

// *********************************************** practice ***********************************************

let str = "ali"
console.log(str + 5)

console.log(typeof str)

const objects = {
    "ali" : true,
    "talha" : 0
}
// objects = 44 // cant be redeclared

// objects = {} // can't add new keys to it

const dictionary = {
    "Happy" : "Khush",
    "Sad" : "Ghamgeen",
    "Name" : "Naam",
    "Water" : "Paani",
    "Hot" : "Garam"
}

console.log(dictionary)
