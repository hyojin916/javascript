// JSON
// JavaScript Object Notaation

// 1. Object to JSON (serialize - 직렬화)
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']); // ["apple","banana"] 배열 type처럼 보이면서 ""로 나옴(json 규격)
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // 'jump'함수는 object 내에 있는 data가 아니기 떄문에 나오지 않음.

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); //{"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'hyojin' : value;
});
console.log(json); // {"name":"hyojin","color":"white","size":null,"birthDate":"2021-02-21T07:23:17.637Z"}

// 2. JSON to Object (deserialize)
// parse(분석하다)(json)
const obj = JSON.parse(json, (key, value) => { // --> A
  console.log(`key: ${key}, value: ${value}`); 
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj); // {name: "hyojin", color: "white", size: null, birthDate: "2021-02-21T07:23:17.637Z"}

rabbit.jump(); // can jump!
// Error (rabbit->JSON(함수x)->obj(함수x))

console.log(rabbit.birthDate.getDate()); // 21 (오늘 날짜, Date()라는 object)
console.log(obj.birthDate.getDate()); // 21 --> A 에서 key와 value를 이용해 Date를 return해 줘서 Error가 안남