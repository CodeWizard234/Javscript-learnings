

function words() {
console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.log("F");
}

// words()

// function addTwoNumbers(number1 , number2 ) {
//  console.log(number1 + number2);
// }
function addTwoNumbers(number1 , number2 ) {
    // let result = number1 + number2;
    // return result
    // console.log("AQUA");
    return number1 + number2;
   }

// addTwoNumbers(5, 4);// 9

// addTwoNumbers( 4 , "4"); // 44

// addTwoNumbers( 4 , "a"); // 4a

// addTwoNumbers(4 , null); // 4

const result = addTwoNumbers(3 ,3);

// console.log("Result: ", result);

function loginUserMessage(username= "sam"){
    // if(username===undefined){
    //     console.log("Please enter a valid username");
    //     return 
    // }
    if(!username){
        console.log("Please enter a valid username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("AQUA"));
// console.log(loginUserMessage())// undefined
// console.log(loginUserMessage("jack bosma"));

// when we don't know how many arguements will arise

function calculateCartPrice( val1 , val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200 , 500 , 209, 200));

const user = {
    username:"AQUA",
    price:100
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and pice is ${anyobject.price}`)
}

// handleObject(user);
// check the type safety cuz it can give undefined as value.

handleObject({
    username:"sam",
    price:300
})

// for the array 
const myNewArray = [200 , 100 , 200 ,500];

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 500 , 600 , 2340]));