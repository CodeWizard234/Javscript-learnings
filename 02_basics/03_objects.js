// singleton 
// object.create

// object literals 

const mySym = Symbol("key1");


const JsUser = { 

    name:"AQUA",
    [mySym]:"mykey1",
    "full name":"AQUA DAVID",
    age:18,
    location:"Mumbai",
    email:"aqua@tesla.com",
    isLoggedIn:false,
    lastLoginDays:["Monday" , "Saturday"]
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

/* sometime we have to access objects using
dot or sometimes even square brackets*/

JsUser.email = "aqua@chatgpt.com";
// Object.freeze(JsUser);

JsUser.email = "aqua@apple.com";

// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hellow Js User");
}
JsUser.greetingTwo = function () {
    console.log(`Hellow Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());