// array

const myArry = [ 0 , 1 , 2 , 3 , 4 ,5];

console.log(myArry[0]);//0

const myHeroes = ["shaktiman" , "nagraj"];

console.log(myHeroes[1]); //nagraj


const myArry2 = new Array( 2 , 5 ,6); // [2 ,5, 6]
console.log(myArry.indexOf(3)); // 3


console.log(myArry2);

// Array Methods 

myArry.push(6);
// push helps to add value in a array

myArry.push(7);
myArry.pop();

// pop used for removing the last value

myArry.unshift(9);
// unshift adds the give value in the beginning

myArry.shift();
// works opposite of shift 

// to check whether value is present or not we use includes here

console.log(myArry.includes(9)); // false

// to check value place 

// console.log(myArry.indexOf(9)); // -1 because we didn't find

// cconsole.log(myArry); // [0 , 1, 2, 3 ,4 ,5 ,6]


const newArr = myArry.join() 
console.log(myArry); // [0 , 1, 2 ,3 , 4 ,5 ,6 ,7]

console.log(newArr);

console.log(typeof newArr);


// slice , splice 


console.log("A" , myArry);

const myn1 =myArry.slice(1, 3);


console.log(myn1);
console.log("B" , myArry);

const myn2 = myArry.splice(1,3);
console.log("C" , myArry);

console.log(myn2);