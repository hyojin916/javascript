// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join('*^^*');
  console.log(result); // apple*^^*banana*^^*orange
}

// Q2. make an array out of a string
{
  const fruits = ('🍎, 🥝, 🍌, 🍒');
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array.reverse());
}

// Q4. make 😝 new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0,2);
  console.log(array); // 방법 1 (근데 New array가 아님) 
}
{
  const array = [1, 2, 3, 4, 5];
  array.shift();
  array.shift();
  console.log(array); // 방법 2 (근데 New array가 아님) 
}
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);//🧞‍♂️우리가 궁극적으로 해야하는 것!, 첫 번째로 90점이 되는 값을 return하면서 find 함수가 멈춘다!!
  // console.log(student); (푸는 과정에서 잘 나오는지 확인)
  // arraw function은 배열들의 요소마다 호출이 되고, 90점이면 true,아니면 false
  // 그리고 find는 첫 번째로 true가 나오면 그 요소를 return해주는 API
console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
}
// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
 const result = students.map((student) => student.score);
 console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => {
   console.log(prev);
   console.log(curr);
   return prev + curr.score;
  }, 0);
  console.log(result);
 }
 {
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
 }

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .join(':)');
  console.log(result); // 45:)80:)90:)66:)88
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b)=> a-b)
  .join();
  console.log(result);
}
/* {
  const result = students
  .map((student) => student.score)
  .join()
  .sort((a, b) => a-b);
  console.log(result);
} */