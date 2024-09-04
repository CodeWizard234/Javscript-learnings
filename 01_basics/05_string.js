const name = "AQUA"

const repoCount = 50

console.log(name + repoCount + " Value"


 )


 console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)

 const gameName = new String('AQUA-AP-com');


 console.log(gameName[0]);
 console.log(gameName.__proto__);
 console.log(gameName.length);
 console.log(gameName.toLowerCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('U'))
 console.log(gameName.indexOf('A'));

// FOR Anchor string 

console.log(gameName.anchor('AQUA'));

// using at method 

console.log(gameName.charAt(0));


// big method

console.log(gameName.big('AQUA'));

// blink method 

console.log(gameName.blink('AQUA'));

console.log(gameName.bold('AQUA'));

// charCodeAt method which defines what no. a character is having 

console.log(gameName.charCodeAt(2));

console.log(gameName.charCodeAt(1))

// codePointAt will return the same value but with the code and it should be used for the specific emojis or special characters.


const emoji = new String('💧');

console.log(emoji.codePointAt('0'));

// concat adding two or more strings in a single string.

const firstname = 'AQUA';

const lastname = 'DAVID';


console.log(firstname.concat(' ', lastname));


/* let's take a second example for better understanding
*/


const username = 'Charlie';

const loginPassword = '34324';

console.log(username.concat(' ', loginPassword));

// let's talk about constructor string fromCharCode 

const codes = [ 72 , 101 , 108 , 108 , 111];

const hellow = String.fromCharCode(...codes);

console.log(hellow);


const alphabets = [65 , 66 , 67 , 68 , 69];

const print = String.fromCharCode(...alphabets);

console.log(print);


// fromCodePoint is used for any characters or emojis

const string = String.fromCodePoint( 65 , 66 , 67 , 69 , 128169);



console.log(string);

// raw method interprets anything and returns exact result using backslashes

const rawString = String.raw`Iwassostupid`;

console.log(rawString);


// endsWith checks that substring really endsWith that substring or not and also u can include length .

const sentence = 'Hello, World!';

console.log(sentence.endsWith('World!'));

console.log(sentence.endsWith('World!', 13));



const newString = gameName.substring(0 , 4)

console.log(newString);

const anotherName = gameName.slice(-7 , 3);

console.log(anotherName);

console.log(gameName.length);


//trim used for the words

const newStringOne = "      hitesh       ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://Aqua.com/Aquadavid%20pagal"

console.log(url.replace('%20','-'));

console.log(url.includes('Aqua'));
console.log(url.includes('kylie'));


console.log(gameName.split('-'));