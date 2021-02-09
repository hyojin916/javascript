// 자료구조: 비슷한 종류의 Data를 묶어놓는 것! 
// object는 토끼(귀2개, 먹는다, 뛴다), 당근(주황색, 뿌리)
// 자료구조는 토끼끼리 묶어둔 것, 당근끼리 묶어둔 것!.
/* Javascript === dynamically typed language기 떄문에 type이 다른 것 끼리 묶어둘 수 있지만! (토끼, 당근, 양파, 호박)
같은 type의 data끼리 묶는 것이 이상적이다! */
'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. index position
const fruits =['🍎','🍌'];
console.log(fruits); // (2) ["🍎", "🍌"]
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎 (0 부터 시작하기 때문)
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 아이템을 찾을 때: length-1

// 3. Looping over an array
// print all fruit
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit)
}

// c. forEach
fruits.forEach(function (fruit, index) {
  console.log(fruit, index); // forEach API확인!  > 🍎 0, 🍌 1 (index 출력 안해도 됨. 내가 출력하고싶은 것 선택가능)
});
/* anonymous function 간단하게
fruits.forEach((fruit, index) => console.log(fruit, index));
*/

// 4. Addition, deletion, copy
// push: add an item to the end.
fruits.push('🍓', '🍑');
console.log(fruits); // (4) ["🍎", "🍌", "🍓", "🍑"]

// pop: remove an item from the end.
fruits.pop();
fruits.pop();
console.log(fruits); // (2) ["🍎", "🍌"]

// unshift: add an item to the beginning
fruits.unshift('🍓', '🍋');
console.log(fruits); // (4) ["🍓", "🍋", "🍎", "🍌"]

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // (2) ["🍎", "🍌"]

// note!!! shift와 unshift는 push, pop보다 느리다!!
// splice: remove an item by index position.
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // (5) ["🍎", "🍌", "🍓", "🍑", "🍋"]

fruits.splice(1, 1);
console.log(fruits); // (4) ["🍎", "🍓", "🍑", "🍋"]

fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits); // (5) ["🍎", "🍏", "🍉", "🍑", "🍋"]

// combine two arrays.
const fruits2 = ['🥑', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (7) ["🍎", "🍏", "🍉", "🍑", "🍋", "🥑", "🥥"]


console.log(fruits);(5) // ["🍎", "🍏", "🍉", "🍑", "🍋"]

// 5. Searching 
// indexOf: find the index
console.log(fruits.indexOf('🍎')); // 0 
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.includes('🥥')); // -1

// includes
console.log(fruits.includes('🍎')); // true
console.log(fruits.includes('🥥')); // false

// lastIndexOf
fruits.push('🍎');
console.log(fruits); // (6) ["🍎", "🍏", "🍉", "🍑", "🍋", "🍎"]
console.log(fruits.indexOf('🍎')); // 0 
console.log(fruits.lastIndexOf('🍎')); // 5 


