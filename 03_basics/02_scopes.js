let a = 300;

var c = 300;
if(true){
    let a = 10;
    const b = 20;
    c = 30; 
    // console.log("Inner block:" , a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "AQUA"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);

    // two();
}
// one();


if(true){
    const username = "AQUA"
    if(username ==="AQUA"){
        const website = " youtube";
        // console.log(username + website);
        
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++Interesting++++++++++++//


console.log(addOne(5));
function addOne(num){
    return num + 1;
}



console.log(addTwo(5));
// we can't use console log in this to get the value as function is declared in a different way.
const addTwo = function(num){
    return num + 2;
}

