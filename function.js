/* function (함수)
- 프로그램을 구성하는 기본적인 빌딩 블럭.
- Sub-program 이라고도 불리며, 여러 번 재사용이 가능하다.
- 한 가지의 task나 어떤 값을 계산하기 위해 쓰여진다.
*/

/*1. Function declatation (함수 선언)
  function name(param1, param2) { body ... return; }
  * one function === one thing !! 
  * function naming: doSomething, verb, command 형태로 <--> Variable(변수) name은 명사 
  * function is object in JS: 함수는 오프젝트의 일종이다? --> 함수를 선언하고.을 누르면 함수의 속성 값을 확인 가능 
*/
function printHello() {
  console.log('Hello');
}
printHello(); // 그런데 이 함수는 Hello 밖에 출력을 못한다. 더 유용한 함수를 만들려면 아래

function log(message) {
  console.log(message);
}
log('Hello@') // 이렇게 param로 message를 전달하면 log함수를 호출하여 메세지가 출력하도록 함.

// 2. Parameters (매개 변수)
// premitive Parameters: value가 그대로 전달
// object Parameters: refernce가 전달 
function changeName(obj) {
  obj.name = 'coder';
} 
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (add in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); 
// showMessage를 호출할 때 message 하나만 전달되었기 때문에 from 이 undifined로 나온다. 
// 그래서 from에 원하는 default값인 'unknown'을 지정해 준 것임.

// 4. Rest parameters (add in ES6) 배열 형태 arg(arrange)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) { // 0으로 시작해서 arg의 갯수 만큼 출력
    console.log(args [i]);
  }
}
printAll('dream', 'coding', 'ellie');

//5. Local scope 
// (💥 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수있다.!!!)
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage); // --> 출력 가능
  function printAnother() { // (함수 안에 또 함수 가능: closure)
    console.log(message); // --> 출력 가능
    let childMessage = 'hello';
  }
  // console.log(childMessage); --> 출력 불가능. Error! 
}
printMessage();
// console.log(message); --> 출력 불가능. Error! 


// 6. Return a value 
// (모든 함수는 return undefined(생략 가능)이거나 값을 return 할 수 있다.)
function sum(a, b) {
  return a + b; 
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// ex.1) bad
function upgradeUser(user) {
  if (user.point > 10) {   
    // long upgrade logic --> block 안에서 logic을 많이 작성하면 가독성이 떨어짐
  }
}
// ex.2) good
function upgrade(user) {
  if (user.point <= 10) {
    return; // --> 조건이 맞지 않을 때는 빨리 return해서 함수를 종료하고
  }
  // long upgrade logic ---> 조건이 맞을 때만 필요한 logic들을 실행하기.
}

// -----------이때까지 Function을 어떻게 선언했는지: Function declatation ----------

// -----------이제 부터 Function Expression -----------------------------------
// First-class Function
/* functions are treated like other variable! 
- can be assigned as value to variable (변수에 할당 가능)
- can be passed as an argument to ather function.(function의 parameter로 전달이 되며)
- can bw returned by another function. (return 값으로 반환 가능)
---> 이것 들을 가능하게 한 것이 Function Expression */

// 1. Function Expression (함수 표현식)
// Function expression (함수 표현)은 할당 된 다음부터 호출이 가능. (No hoisted)
// Function declaration (함수 선언)은 hoisted가 된다. 즉, 함수가 선언되기 전에 호출해도 호출 가능! 
const print = function () { //<-- 함수를 선언함과 동시에 print 변수에 할당함.
                        //이렇게 함수에 이름이 없는 것: anonymous function
  console.log('print');
}
print(); //--> print 출력
const printAgain = print;
printAgain(); //--> print 출력

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you'){
    printYes();
  } else {
    printNo();
  }
}
// anonymous function (function 옆에 그냥 빈 괄호)
console.log('yes!');
const printYes = function () { 
};

// named function (function이름이 print로 지정)
// 1)디버깅할 때 함수이름 나오게 함  
// 2) 함수 안에서 자기 자신을 또다른 함수로 호출 할 때 (recursions) 
const printNo = function print() { 
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo); // --> 'no!' 출력
randomQuiz('love you', printYes, printNo); // --> 'yes!' 출력

//Arrow Function: 함수를 간결하게 만들어 준다. good
// always anonymous
/* 
const simplePrint = function () {
  console.log('simplePrint');
};
*/
// 이걸 아래처럼 바꿈 
const simplePrint = () => console.log('simplePrint');

// IIFE: Immediately Invoked Function Expression- 함수를 선언 함과 동시에 호출 
(function hello () {
  console.log('IIFE');
})(); 

// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder)