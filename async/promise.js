'use strict';

// "Promise" is a JavaScript Object! for asynchornous(비동기) operation.
// callback함수 대신에 유용하게 쓸 수 있는 object 입니다.
// 1) Stare(상태): pending -> fulfilled or rejected(파일을 찾을 수 없거나 네트워크에 문제가 생겼을 때)
// 2) Producer vs Consumer

// 1. Producer
// 새로운 Promise가 만들어 지면, executor라는 콜백 함수가 바로 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work.(network, read files)
  console.log('doing something...');

  setTimeout(() => {
    resolve('ellie'); // --> 성공
    reject(new Error('no network')); // --> 실패
  }, 2000);
});

// 2. Consumers: then, catch, finally
// 1) then: Promise가 정상적으로 수행되어서 마지막 resolve콜백함수를 통해 전달된 닶이 param으로 전달 됨.
//  
promise
  .then(value => {    // value는 ellie라는 값이 들어온다.
  console.log(value); // 2초 후 ellie 등장
  })
  .catch(error => {   // reject된 Error값이 들어온다.
    console.log(error);
  })
  .finally(() => {   // 성공하든 실패하든 상관없이 마지막에 '무조건' 호출된다. 어떤 기능을 마지막으로 수행하고 싶을 때 사용~!
    console.log('finally'); 
  });

// 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  });

  fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
      });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));

// 받아오는 것이 하나면 아래처럼 간단하게 표현할 수 있다
getHen()
  .then(getEgg)
  .then(cook)
  .then(console.log);

  // 5. 