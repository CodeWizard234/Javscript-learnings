// Array.reduce() method

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc , currval) {
//    console.log(`acc: ${acc} and currval : ${currval}`)
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce((acc , currval) => (acc+ currval), 0)
console.log(myTotal);

const shoppingCart = [

    {
        itemName: "js course",
        price:2999

    },
    {
        itemName:"python course",
        price:1999

    },
    {
        itemName:"java course",
        price:7999
    }
]


const priceToPay = shoppingCart.reduce((acc , item)=> acc + item.price , 0)

console.log(priceToPay);