//class - property. -> key-value.
const person1 = {
	name: '김철수',
	age: 25,
	married: false
  };
  
  console.log(typeof person1);
  console.log(person1);

//check if certain key exists
console.log(
	'age' in person1,
	'job' in person1
  );

//adding new property
person1.job = 'developer';
person1.bloodtype = 'AB'

console.log(person1);

//arr - pretty much like class.
const numbers = [1, 2, 3];
console.log(numbers);
// 맨 끝에 값 추가
numbers.push(10);
console.log(numbers);

//primitive type vs reference type
//primitve - copy by val
let number1 = 1;
let string1 = 'ABC';
let bool1 = true;
let number2 = number1;
let string2 = string1;
let bool2 = bool1;
number2 = 2;
string2 = '가나다';
bool2 = false;
console.log('~1:', number1, string1, bool1);
console.log('~2:', number2, string2, bool2);
//ref - copy by ref
const obj1 = {
	num: 1, str: 'ABC', bool: true
  };
  const obj2 = obj1;
// ⭐️ const임에도 내부 값은 변경 가능함 주목
// 내부 변경 방지는 이후 배울 Object.freeze 함수로
obj2.num = 2;
obj2.str = '가나다';
obj2.bool = false;
console.log('obj1:', obj1);
console.log('obj2:', obj2);