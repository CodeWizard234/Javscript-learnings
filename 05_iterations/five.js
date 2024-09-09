const coding = ["js", "ruby", "java", "python", "cpp"];


// coding.forEach( function (item) {
//     console.log(item);
    
// })



// coding.forEach( (item)=> {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);f

coding.forEach((item , index , arr) => {
    console.log(item , index, arr);
})


const myCoding = [
    {
        languageName:"javascript",
        languagefile:"js"
    },
    {
        languageName:"java",
        languagefile:"java"
    },
    {
        languageName:"python",
        languagefile:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})
