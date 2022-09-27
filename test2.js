//(node+.js fie to test in terminal) cd in terminal

console.log("somthing".indexOf("0")); // number makes it -1

if(!0){ // not a falsy is a truthy
  console.log("in the if");
} else {
  console.log("in the else");
}

let num = 20
if (num = 30){ // one equal sign is a reassinment ALWAYS
  console.log("in the if");
} else {
  console.log("in the else");
}

function foo(){
  return 'bar';
}
console.log(foo()) // A=bar [this function returns because of ()]
console.log(foo) // A=[Function: foo] [this just log what the function name]

function foo(p1,p2){
  return p1+" "+p2;
}
console.log(foo('ethan','mercado')) 

let foo1 = function(){
  return "bar";
}
let foo2 = () =>{
  return 'bar';
}

console.log(foo1())
console.log(foo2())
