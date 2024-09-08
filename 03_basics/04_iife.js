// Immediately Invoked functions expressions (IIFE)

(
function chai(){
    //NAMED IIFE
    console.log(`DB connected`)
})();

// why we use iife
// due to pollution cause by global scope
// for avoiding global scope we use iife

(() =>{
    console.log(`DB CONNECTED TWO`);
})();

// to use 2nd iife we have to put semi-colon in the end


((name)=>{
    console.log(`DB CONNECTED TOO ${name}`)
})("AQUA");