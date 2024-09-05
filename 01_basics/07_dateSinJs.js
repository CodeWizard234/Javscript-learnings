/// Dates


let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toDateString());

console.log(myDate.toISOString());

console.log(myDate.toJSON());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.toTimeString());

console.log(typeof myDate);


let myCreatedDate = new Date(2024 , 10, 9 , 5 , 3);

console.log(myCreatedDate.toDateString());

console.log(myCreatedDate.toLocaleString());

// time stamp - exact , polls

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(Math.floor(Date.now/1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTime());

console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString('default' , {
    weekday: "long"
})



