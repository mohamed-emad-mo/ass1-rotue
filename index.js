

// part A

// 1
let x ="123";
x = Number(X); 
console.log(x+7);  // 130

// 2
let y = 0;
if (!y){
    console.logI("invalid");

} 


// 3
 for (let i = 1; i <=10 ; i++){
    if (i % 2==0){
        console.log([i]);
    }
 }


//4
const arr=[1,2,3,4,5];
let evenArr = arr.filter(num => num % 2 === 0);
console.log(evenArr); // [2,4]


// 5
let arr2 = [1,2,3];
arr2.push(4,5,6);
console.log(arr2); // [1,2,3,4,5,6]


// 6
let Number =2;
switch (Number) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("invalid day");
}

// 7
let arr3 = ["a,ab,abc,"];
let lengthArr = arr3.map(str => str.length);
console.log(lengthArr); // [1,2,3]


// 8
function checknumber(num){
    if (num % 3 === 0 && num % 5 === 0){
        return"Divisible by both 3 and 5";
    } else {
        return "Not divisible by both 3 and 5";
    }
}

// 9
let Square = num => num => num *2;
console.log(Square(4)); // 16


// 10
function fromPreson(person){
    const {name, age,} = person;
    return name + " is " + age + " years old.";
}
console.log(fromPreson({name: "jone", age: 25})); // "jone is 25 years old."

// 11
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(sum(1, 2, 3,4,5));// 15




//13
function Largest(arr){
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(Largest([1,3,7,2,4])); // 7

//14
const user = {
    name: "jone",
    age: 30,
    
};
for (const key in user){
    console.log(key);
}

// 15

const split= str=>str.split(" ");
console.log(split("the quick brown fox")); //  ["the", "quick", "brown", "fox"]



// part B

// 1
// forEach goes through the whole array and cannot stop early. for of allows stopping and gives more control.

// 2
// Hoisting means JavaScript reads declarations before execution. let and const cannot be used before their line, which is the Temporal Dead Zone.

// 3
// == compares after changing types. === compares value and type exactly, and is safer.

// 4
// try catch prevents the program from crashing when an error happens, and in async code it handles errors from await safely.

// 5
// Type conversion is when you change the type on purpose. Type coercion happens automatically during operations.