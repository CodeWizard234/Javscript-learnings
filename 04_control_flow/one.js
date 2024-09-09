// control flow

if(true){

}

if(false){

}

const isUserLoggedIn = true;

if(2!=3){
    console.log("executed");
}
const temperature = 43;

if(temperature <50){
    console.log("less than 50");
}else {
    console.log("greater than 50")
}
3 !=2
// > , <, <=, >=, ==, !=, ===


// const score = 200;

// if(score >100){
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

// we can't log power outside as it comes outside the scope

const balance = 1000;

// if(balance >500) console.log("test") ,
// console.log("test2");

if(balance <500){
    console.log("less than 500");
}else if(balance <750){
    console.log("less than 750");
}else if(balance <960){
    console.log("less than 960");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true;

const debitCard = true;

const loggedInFromGoogle = false;

const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course.");
}


if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
}
