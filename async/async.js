'use strict';

// asynce & await
// clear style of using promise :)

// 1. asynce
async function fetchUser() {
  // do network reqeust in 10 secs...
  return('ellie');
}

/* 'Promise'를 쓸 때 
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network reqeust in 10 secs...
    resolve('ellie'); // <-- 만약 return('ellie')로 하면 pending(보류)상태로 머문다.
  });
}
*/

const user = fetchUser();
user.then(console.log); // --> ellie
console.log(user); // -->  Promise {<fulfilled>: "ellie"}

// 2. await ✨
function delay (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
/* 콜백지옥처럼 되버림 더 간단하게 하려면? 
function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  });
}
*/

// async + 병렬로 정리 (둘 다 1초씩 걸릴 때 2초 --> 1초)
async function pickFruits() {
  const applePromise = getApple();
  const bananaPrimise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPrimise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits => 
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);