'use strict';

// JavaScript is synchronous.(동기적)
// Excute the code block in order after hoisting.
// hoisting: var, function declaration이 자동적으로 제일 위로 올라가는 것.
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 2초 후에 등장


// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie'&& password === 'dream')||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRole(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    })
  }
}

const userStorage = new UserStorage(); // new -> Class
const id = prompt('enter your ID');
const password = prompt('enter your Password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRole(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name} , you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);

// Callback 지옥의 문제점
// 1. 가독성이 떨어짐.
// 2. 에러가 발생했을 때 디버깅하기 어렵다.
// 3. 유지/보수가 어렵다.
// 어떻게 비동기 코드를 깔끔하고 병렬적/효율적으로 할 수 있을지? --> Promise, Async&await