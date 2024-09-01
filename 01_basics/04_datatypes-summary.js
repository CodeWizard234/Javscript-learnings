// Primitive



// 7 Types : string , Number , boolean , null , undefined Symbol(to make a value unique) , BigInt


const score =100

const scoreValue=100.3;

const isLoggedIn=false

const outsideTemp= null

let userEmail;

const id = Symbol('234')
const anotherId = Symbol('2343')

// console.log(id===anotherId);


// const bigNumber = 2343432552343243423432n

// Referrence type : Non-Primitive 


// Arrays , objects ( browser events to master javascript) , Functions


const heros = ["shaktiman" , "naagraj" , "doga"]
{
    name:"AQUA",
    age=23;
}


const myFunction = function(){
    console.log("Hellow");

}


console.log(typeof id);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive) (memory)

let myYoutubename = "AQUAdotcom"


let anothername = myYoutubename

anothername = "chaiaurcodedotcom";

console.log(anothername);
console.log(myYoutubename);


let userOne ={
    email:"user@gmail.com",
    upid:"234@byl"
}


let userTwo = userOne


userTwo.email = "AQUA@GMAIL.COM"

console.log(userOne.email)
console.log(userTwo.email)


// In stack ( Primitive) you get just a copy of that value


// but in Heap ( Non-Primitive) you get a the referrence of the given value 
