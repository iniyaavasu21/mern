function showMyMessage(){
   console.log("nice");
}

//var
var x=5;
x=10;
console.log(typeof x);
console.log(x);
//let
let a=10;
a=20;
console.log(a);
//const
const b=30;
console.log(b);

//string-'',""
let st="hello";
console.log(st);
//boolen
let istrue=true;
console.log(istrue);
//null
let n=null;
console.log(n);
console.log(typeof n);

let isvalid=true;
let age=20;
if(age>=18){
    isvalid=true;
}
//undefined
let isAvailable;
console.log(isAvailable);
console.log(typeof isAvailable);

//symbol
let sym=Symbol("hello");
console.log(sym);
console.log(typeof sym);

//bigint
let bigInt=BigInt(123456789012345678);
console.log(bigInt);
console.log(typeof bigInt);

//non-primitives:object,array,function

//object
const person={
    name:"iniyaa",
    age:20,
    isStudent:true,
    college:"srm",
    address:{
        city:"chennai",
        state:"tamilnadu"
    }
}
console.log(person.name);
console.log(person);
person.age=21;  

//Array
const numbers=[1,2,3,4,5];
   //push
numbers.push(6);
   //unshift
numbers.unshift(0);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
   //includes
console.log(numbers.includes(3));
console.log(numbers.includes(10));
   //indexOf
console.log(numbers.indexOf(4));
console.log(numbers.indexOf(0));
    //slice
const slicedArray=numbers.slice(2,5);
console.log(slicedArray);

//function
function add(name){
   console.log("hello"+name);
}
add(" iniyaa");
add(" anu");
add(" gopi");
add(" barani");
add(" prabha");

//arrow function
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(2,3));

//callback function
function greet(name,callback){
    console.log("hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("goodbye");
}
greet("iniyaa",sayGoodbye);

//sync and async function
function syncFunction(){
    console.log("sync function");
}
function asyncFunction(){
    setTimeout(()=>{
        console.log("async function");
    },2000);
}
syncFunction();
asyncFunction();





/*function add(a,b){
    return a+b;
}
let a=10;
let b=20;
let sum=add(a,b);
console.log(sum);*/

/*buit in array methods
   1.push() */

/*data types:
    1.primitives:number,string,boolean,undefined,null,symbol,bigint.
    2.non-primitives:object,array,function.*/