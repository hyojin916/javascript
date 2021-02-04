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
      console.log(`${this.name}: hello!`); //this(생성된 object-hyojin)
    }
  }

  const hyojin = new Person('hyojin', 26); //새로운 Object를 만들 때는 "new"키워드를 사용
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
  
  // 3. Inhertance(상속) & OverWriting(덮어쓰기, 다양성)
  // a way for one class to extend anotherclass. 클래스를 확장~
  class Shape {
    constructor (width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }

    draw() {
      console.log(`drawing ${this.color} color of!`);
    }

    getArea() {
      return this.width * this.height;
    }
  }

  class Rectangle extends Shape {} // 👉 extends 를 써서 Shape를 '상속!'받음
  class Triangle extends Shape { // 👉 extends 를 써서 Shape를 '상속!'받음
    draw() {                     // 👉 Triangle class는 이렇게 OverWriting을 적용 함!
      super.draw();              // 👉 아래에는 OverWriting 받으면서도 'super'을 사용하여 부모의 method도 그대로 가져옴.
      console.log('🔺');
    }
    getArea() {
      return this.width * this.height;
    }
  }

  // 헷갈려서 메모해 둔 것: const옆 rectangle은 Object, new옆에 Rectangle은 Class
  const rectangle = new Rectangle(20, 20, 'blue');
  rectangle.draw();
  console.log(rectangle.getArea());
  const triangle = new Triangle(20, 20, 'red');
  triangle.draw();
  console.log(triangle.getArea());

  // 4. Class Checking: "instanceOf"!!!
  // 왼 쪽에 있는 Object가 오른쪽에 있는 Class의 instance인지 (즉, 오른쪽 class를 이용해서 만들어진 object인지 출력)
  console.log(rectangle instanceof Rectangle); // T
  console.log(triangle instanceof Rectangle); // F
  console.log(triangle instanceof Triangle); // T
  console.log(rectangle instanceof Triangle); // F
  console.log(triangle instanceof Shape); // T (Shape을 상속했기 때문에~)
  console.log(triangle instanceof Object); // T (우리가 자바스크립트에서 만든 모든 Object Class들은 Object를 상속함)