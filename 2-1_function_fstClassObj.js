//JS's defining methods
// 💡 기존의 함수를 재정의하는것도 가능
add = function (x, y) {
	console.log(`${x}와 ${y}를 더합니다.`);
	console.log(`결과는 ${x + y}입니다.`);
	return x + y;
  }
  
  console.log(add(2, 7));

// 한 줄 안에 값만 반환시
const mult = (x, y) => x * y;
console.log(mult(2, 7));

// 두 줄 이상의 작업이 있을 시
const multt = (x, y) => {
	console.log(`${x}와 ${y}를 곱합니다.`);
	console.log(`결과는 ${x * y}입니다.`);
	return x * y;
  };
  console.log(multt(2, 7));

  // 인자가 하나일 때는 괄호 없이 선언 가능
const pow = x => x ** 2;
console.log(pow(3));

// 함수를 변수와 같이 다루는 언어에 있는 개념 - FstClassObj 자바스크립트의 함수도 일급 객체 
/* 상수 또는 변수에 할당될 수 있음
다른 함수에 인자로 전달될 수 있음
다른 함수의 결과값으로서 반환될 수 있음 */
// ⭐️ 함수의 자료형
function addNumbers (a, b) { return a + b; }
console.log(typeof addNumbers);

function isOddNum (number) {
	console.log(
	  (number % 2 ? '홀' : '짝')
	  + '수입니다.'
	);
	return number % 2 ? true : false;
  };
  
  const checkIfOdd = isOddNum; // 뒤에 괄호 없음 유의
  console.log(checkIfOdd(23));

  let x = 7, y = 3;

let func1 = (a, b) => a + b;
let func2 = (a, b) => a - b;
console.log(func1(x, y), func2(x, y));

func1 = func2
console.log(func1(x, y), func2(x, y));

let person = {
	name: '홍길동',
	age: 30,
	married: true,
	introduce: function () {
	  return `저는 ${this.name}, ${this.age}살이고 `
	  + `${this.married ? '기혼' : '미혼'}입니다.`;
	}
  }
  
  console.log(person.introduce());

/*
전달받는 함수 : 고차 함수 highter-order function
전달되는 함수 : 콜백 함수 callback function
*/
//익명함수
function doNTimes (func, repeat, x, y) {
	let result = x;
	for (i = 0; i < repeat; i++) {
	  result = func(result, y);
	}
	return result;
  }
  
  console.log(
	doNTimes((x, y) => x * y, 3, 5, 2),
	doNTimes((x, y) => x / y, 3, 5, 2),
  );