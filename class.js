'use strict';
/* class는: template
  object는: template을 이용해서 실재로 data를 넣어서 만드는 것.
  JavaScript classes
  - introduce in ES6
  - syntactical sugar over protoytpe=based inheritance
    기존에 존대하던 프로토탑입 베이스로 문법만 추가한 것! 
*/

  // 1. Class declarations (class 선언)
  class Person {
    // constructor (생성자: object를 만들 때, 필요한 data 전달)
    constructor(name, age) {
      // fields (name, age에 전달 된 data를 할당)
      this.name = name;
      this.age = age;
    }

    // method
    speak() {
      console.log(`${this.name}: hello!`); //this(생성된 object)
    }
  }

  const hyojin = new Person('hyojin', 26);
  console.log(hyojin.name);
  console.log(hyojin.age);
  hyojin.speak();

  // 2. Getter and Setters
  class User {
    constructor(firstName, lastName, age) {
      // fields --> firstName, lastName, _age
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
    get age() { //값을 return
      return this._age;
    }

    set age(value) { //값을 설정
      // if (value < 0) {
      //    throw Error ('age can not be negative');
      // }
      this._age = value < 0 ? 0 : value;
    }
  }

  const user1 = new User('Steve', 'job', -1);
  console.log(user1.age);
  
  // 3. 상속 & 다양성 