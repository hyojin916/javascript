// Objects 
// One of the JavaScript's Data types.
// a collection of related data and/or functionality.
// Nearly all objects in Javascript are instances of Object.
// object = { key : value };

// 1. Literals & Properties
const obj1 = {}; // 'object literal' syntax. Class 없이 object를 생성할 때.
const obj2 = new Object(); // 'object constructor' syntax. Class를 이용해서 만들 때.

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// With Javascript magic (dynamically typed language) can add properties later.
ellie.hasjob = true;
console.log(ellie.hasjob);
// Can delete properties later
delete ellie.hasjob;
console.log(ellie.hasjob); //> undefined

// 2. Computed properties (계산된 properties)
// 방법 1: 언제? 해당하는 키에 해당하는 값을 바로 받아오고 싶을 때. 
console.log(ellie.name); 
/* 방법 2, Computed properties: 정확하게 어떤 Key가 필요한지 모를 때. 즉, runtime에서 결정될 때.
(Key 값은 항상 'String'이어야 한다.) */
console.log(ellie['name']); 
ellie['hasjob'] = true;
console.log(ellie.hasjob); // true

// 3. Property value shorthand
const person1 = {name: 'bob', age: 1};
const person2 = {name: 'steve', age: 2};
const person3 = {name: 'dave', age: 3};
const person4 = new Person ('ellie', 4);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // 생략: this ={};
  this.name = name;
  this.age = age;
  // 생략: return this;
}

// 5. in operator: 해당하는 object안에 key가 있는지 없는지 확인.
console.log('name' in ellie); // T, ellie object안에 name key가 있니? 
console.log('age' in ellie); // T
console.log('tall' in ellie); // F
console.log(ellie.tall); // >undifined


// 6. for..in VS for..of
// for... in (key in object > object안에 있는 모드 key들이 출력된다.)
for (key in ellie) {
  console.log(key);
}

// for... of (value of iterable)
// 순차적으로 
/* 방법 1
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length ; i++) {
  console.log(array[i]);
}
*/

const array = [1, 2, 4, 5];
for(value of array) {
  console.log(value);
}

// 7. object cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'hyojin', age: '26'};
const user2 = user;
console.log(user); // 
// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2); //뒤에 나오는 것이 앞에 나온 동일한 속성 값을 덮어 씌움.
console.log(mixed.color); // blue 출력 
console.log(mixed.size); // big 출력
