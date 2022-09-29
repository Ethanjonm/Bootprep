//please console.log numbers 1 through 10

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log("---")

for(let i = 1; i <= 10; i++){
    console.log(i);
}

/*  initializer    while conditional        incrementor
for(let i = 1;       i <= 10;             i++){
    console.log(i);
} */

console.log('after the loop');
console.log("---")

//write a function printRange(start, end)
//that prints the range between start and end.

function printRange(start, end){
    for(let i = start; i <= end; i++){
        console.log(i);
    }
}
printRange(3,10);
console.log("--2")

function printRange1(start, end){
    let i = start;
    while (i <= end){ // end is true
        console.log(i);
        i++;
    }
}

console.log("--3")

let i = 20;
while (false){ // true and 1 === 20 would make an inifite loop
    console.log(i);
}

console.log("--4")

function skipFive(num){
    for (let f = 1; f <= num; f++){
        if (f === 5){
            continue
        }
        console.log(f);
    }
}
skipFive(20);

console.log("--5")

function breakAtFive(num){
    for(let r = 1; r <= num; r++){
        if (r === 5){
            break;
        }
        console.log(r);
    }
}

breakAtFive(20)

console.log("--6")

/* write a function isPrime(num) that takes in a number and returns
true if the number is prime, and false otherwise.
1. Any number less than 2 is not prime
2. A prime number is only divisble by itself and the number 1  */

function isPrime(num){
    if(num < 2) return false;
    for(let n = 2; n < num; n++){
        if(num % n === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(101))

console.log("--7")

function logBetween(lowNum, highNum){
    for(let q = lowNum; p = highNum; q++){
        if (q > p){
            break
        }
        if( q === p + 1){
            break
        }
        console.log(q)
    }
}

logBetween(-1, 2);
logBetween(14, 6)
logBetween(4, 5)

console.log("---8")

function logBetweenStepper(min, max, step){
    for (let t = min; t <= max; t += step){
        console.log(t)
    }
}

logBetweenStepper(5, 9, 1)


console.log("---9")

function printsFives(max){
    for (let m = 0; m <= max; m += 5){
        console.log(m)
    }
}

printsFives(20)

console.log("---10")

