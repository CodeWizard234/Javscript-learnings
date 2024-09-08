const user = {
    username: "aqua",
    price:999,

    welcomeMessage: function(){
       console.log(`${this.username} , welcome to website`);
       console.log(this);
    }
}
// user.welcomeMessage();

// // if we change user username

// user.username = "sam";

// user.welcomeMessage();

console.log(this); // for global space

// function chai(){
//     let username = "sarah";
//     console.log(this.username);
// }
// chai();


// const chai = function (){
//     let username = "lily";
//     console.log(this.username);
// }
const chai = () =>{
    let username = "lily";
    console.log(this);
}

// chai();

/*all about arrow function
*/

// const addTwo = (num1 , num2)=> {
//     return num1 + num2;
// }
// const addTwo = (num1 , num2)=> num1 + num2;

// const addTwo = (num1 , num2)=> (num1 + num2);
const addTwo = (num1 , num2)=> ({username: "aqua"});


console.log(addTwo(3 ,5));

// loops example

const myArray =[2 ,3,5 ,6 ,4];

myArray.forEach(function () {})
myArray.forEach(() =>{})//arrow functions
myArray.forEach(() =>())