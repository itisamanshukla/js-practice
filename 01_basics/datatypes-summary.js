// primitive
// number,bigint, string, boolean, null, undefined, symbol
const id=Symbol("123");
const anotherId=Symbol("123");
// console.log(id);
// console.log(anotherId);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(id == anotherId);
// console.log(id ===anotherId);

const bignumber=2333874838388499990n;

// non primitive
// array, object, function
let  hero=["Ironman","hulk","Captain"];
let obj={
    name:"aman",
    age:22,
}
const fun=function(){
    console.log("hello world");
}

console.log(typeof hero);
console.log(typeof bignumber);
console.log(typeof fun);
console.log(typeof obj);




