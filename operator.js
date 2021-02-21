'use strict';

// 1. String concatenation 
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
//string literals의 장점은 줄 바꿈을 하거나 다른 기호를 넣어도 문자열로 나옴.

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide 
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder (나머지: 1)
console.log(2 ** 3); //exponentiation (지수화: 8)

// 3. Increment(++) and decrement(--) operators 
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; --> 3
// preIncrement = counter --> 3 출력 
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; --> 3
// counter = counter + 1; -- 4 출력
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; 

// || (or), finds the First truthy value 
// **중요**(or 연산자는 첫 번째 값이 true가 나오면 계산을 멈춘다!!!!! 왜냐면 어떤 것들 중 하나만 true이면 상관 없음!)
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to conpress long if-statement
// nullableObject && nullableObject.somthing

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('👻');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === stric eqality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality = puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else  (어딘가 틀림...어디지..)
const name = 'coder';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkowon');
}

// 9. Ternary operator: ? 
// condition ? value : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

/* 10. Switch statement
use for multiple if checks
use for enum-like(열거 형) value check
use for multiple type check in TS */
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
    default:
    console.log('same all!');
    break;
}

// 11. Loops (반복 문)
/* while loop: while the condition is truthy,
  body code is executed. */
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

/* do While loop: body code is executed first,
  then check the condition. */
// 조건문이 맞을 때만 블럭을 실행하고 싶다면 while, 블럭을 먼저 실행하고싶으면 do while.
do {
  console.log(`do whileL ${i}`);
  i--;
} while (i > 0);

/* for loop: for (begin; condition; step)
begin은 한 번만 호출하고 > 블럭을 실행하기 전에 conditin 이 맞는지 검사하고 > 다음 step (컨디션이 안맞을 때 까지.)
*/
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable decoration
  console.log(`inline variable fle: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue 
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if( i % 2 !== 0) {
    continue;
  }
  console.log(`Q1. ${i}`)
}
// continue 안썼을 때 
for (let i = 0; i < 11; i++) {
  if( i % 2 === 0) {
    console.log(`Q1-1. ${i}`);
  } 
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 10; i++) {
  if( i > 8 ) {
    break;
  }
  console.log(`Q2. ${i}`);
}