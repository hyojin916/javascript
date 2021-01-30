/* Whole-script strict mode syntax
javascript is very flexible
flexible === dangerous
1. Use strict
added ECMAScript 5
use this for Valin Javascript. */
'use strict';

// 2. Variable (변경 될 수있는 것)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

/*var (don't  ever use this!)
 var hoisting: "어디에 선언했냐에 상관없이 한상 제일 위로 선언을 끌어올려 주는 것"
 (hoisting: 끌여 올려주다.)
 var has no block scope (즉 블럭을 철저히 무시함..ㄷㄷ) */
{
  age = 4;
  var age;
}
console.log(age);

/* 3. Constants
(Immutable Data type<-------> 값이 계속 변경될 수 있는 것은 Mutable Data type)
favor immutable data type always for a few reasons:
- security (보안상의 이유)
- thread safety 
- reduce human mistakes */
const dayInWeek = 7;
const maxNumber = 5;

/* 4. Variale types
1. primitive type(더이상 작은 단위로 나눠질 수 없는 한가지의 아이템), single item: number, string boolean, null, undefiend, symbol
2. object type(single item들을 여러 개 묶어서 한 단위로 관리해 줄 수 있도록 하는 것), box container
3. function, first-class function 
  (이 프로그래밍 언어에서는 function도 다른 data type처럼 변수에 할당이 가능하고, 그렇기 때문에 인자로 도 전달되고 retern도 가능하다.)
  */

//4-1. primitive type

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, -infinity, NaN: DOM요소를 만들 때 숫자인지 확인을 하지 않고 계산할 때 오류가 날 수 있기 문에
const infifity = 1/0; //양의 정수를 0으로 나눌 때 
const negativeinfifity = -1/0; //음수를 0으로 나눌 때 
const nAn = 'not a number' /2; //숫자가 아닌 string을 나눌 때 
console.log(infifity);
console.log(negativeinfifity);
console.log(nAn);

// string
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

/* boolean 
false: 0, null, undefined, NaN, ''(비어져있는 string)
true: any other value */
const canRead = true;
const test = 3 < 1; //false
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);

// null
let nothing = null; //너는 empty 값이야~
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // 얘는 선언이 되었지만 값이 지정되지 않은 것. 
console.log(`value: ${x}, type: ${typeof x}`);

/* symbol, create unique identifiers for objects
(식별자: 고유한 식별자가 필요하거나 동시다발적으로 일어나는 코드에서 우선순위를 주고싶을 때 쓰는 것) */
// 1) 동일한 string을 이용하여 id를 만들었지만 2가지의 심볼은 다른 경우이다.
const symbol1 = Symbol(`id`);
const symbol2 = Symbol(`id`);
console.log(symbol1 === symbol2);
// 2) string이 똑같다면 동일한 symbol을 만들고 싶을 때 
const gSymbol1 = Symbol.for(`id`);
const gSymbol2 = Symbol.for(`id`);
console.log(gSymbol1 === gSymbol2); // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 4-2. object type (박스 형태!)


// 5. Dynamic typing (<--> 반대로 C나 java 언어는 statically type lang이다.)
