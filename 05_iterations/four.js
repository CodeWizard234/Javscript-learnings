const myObject ={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);


}

// for array

const programming = ["rb", "java", "py", "js", "cpp"];

for (const key in  programming) {
//    console.log(programming[key]);
}


const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");


for (const key in map) {
    console.log(key);
}

// forin loop can't be iterate on map function