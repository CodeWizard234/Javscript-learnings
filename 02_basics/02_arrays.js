const marvel_heros = ["thor" , "Ironman" , "spiderman"];


const dc_heros =["superman" , "flash" , "batman"];


// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);

console.log(allHeros);

const all_new_heros = [...marvel_heros , ...dc_heros];


console.log(all_new_heros);

const another_array = [ 1, 3, 5, 34 , [3, 5, 5] ,5 , [35 , 34 ,35] , [35, [353, 534]]]

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

// here we used flat to combine all the value given a array with some complexity still able to combine

console.log(Array.isArray("AQUA"));

console.log(Array.from("AQUA"));

console.log(Array.from({name:"AQUA"})); // interesting


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2 , score3));


/* let's practice even more based on Array.isArray,
Array.from , Array.of */


/* Array.isArray()
This method checks if a given value is an array or not.*/

console.log(Array.isArray([1 , 3, 4]));

console.log(Array.isArray("AQUARIUM"));

const name = { name :"AQUA"};

console.log(Array.isArray(name));

console.log(typeof name); // object


/* Array.of()
This method creates a new array from a list of arguments.*/

console.log(Array.of(2 , 35 ,5 ,2));

console.log(Array.of("AQUA" , "DAVID" , "MICHAEL"));


console.log(Array.of(5));


/*Array.from() 
This method creates a new array from an iterable or array-like object.*/

console.log(Array.from("AQUA"));

console.log(Array.from([2 , 5, 5]));

console.log(Array.from([2 ,4, 8] , x=> x*8));




