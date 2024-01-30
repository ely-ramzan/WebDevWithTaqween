// **************************OOP***********************************


// ***********************************PROTOTYPES***********************************
// let edu = {
//     school:"WCCT",
//     clg : "PGC",
//     uni : "COMSATS",
//     gradesCalculator: ()=>{
//         console.log(90,"%");
//     }
// }


// let man = {
//     name:"ali",
//     age:25,
//     gender:"male",
//     canStudy:()=>{
//         console.log("man studies")
//     }
// }

// let student = {
//     education:edu,
//     canStudy: ()=>{
//         console.log( `can study`);
//     }
// }

// student.__proto__ = man

// console.log(student.name);
// console.log(student.education.uni);
// student.education.gradesCalculator()

// ***********************************Classes***********************************

// class Student{
//     constructor(name,age,className){
//         this._name = name;
//         this._age = age;
//         this._className = className;
//     }

//     calculateGrades(){
//         console.log("Your grades are 90 %");
//     }

//     get name(){
//         return this._name;
//     }
//     get age(){
//         return this._age;
//     }
//     get className(){
//         return this._className;
//     }

//     set name(name){
//         this._name = name;
//     }
//     set age(age){
//         this._age = age;
//     }
//     set className(className){
//         this._className = className;
//     }
// }


// class UniversityStudent extends Student{

//     constructor(name,age,className,uniID,courses){
//         super(name,age,className);
//         this._uniID = uniID;
//         this._courses = courses;
//     }

//     calculateGrades(){
//         super.calculateGrades()
//         console.log(`your university id is ${this._name}`);
//     }

//     get uniID(){
//         return this._uniID;
//     }
//     get courses(){
//         return this._courses;
//     }

//     set uniID(uniID){
//         this._uniID = uniID;
//     }
//     set courses(courses){
//         this._courses = courses;
//     }
// } 

// let ali = new UniversityStudent("ali",18,"BS",83,"Computer Science");
// // ali.name = "ely"
// ali.calculateGrades();
// console.log(ali instanceof Student);

// class ComplexNumber {
//     constructor(real,imaginary){
//         this.real = real;
//         this.imaginary;
//     }

//     static addComplexNumbers(num1,num2){
//         let realPart = num1.real + num2.real;
//         let imaginaryPart = num1.imaginary + num2.imaginary;
//         return new ComplexNumber(realPart,imaginaryPart)
//     }
// }