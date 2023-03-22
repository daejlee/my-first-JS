// 빈 객체 생성
const food2 = {};
console.log(food2);
// 프로터피 추가
food2.name = '샐러드';
food2.price = '6000';
food2['vegan'] = true;

console.log(food2);

const obj = {
	1: '하나', // 숫자도 객체의 키로는 사용 가능
	'ab-cd': 'ABCD', // 문자 포함 시 키도 따옴표로 감싸야 함
	's p a c e': 'Space'
  }
  
  // 대괄호 프로퍼티 접근 연산자로만 가능
  console.log(
	obj[1],
	obj['ab-cd'],
	obj['s p a c e']
  );
  
  // ⚠️ 오류 발생
  // console.log(
  //   obj.1,
  //   obj.ab-cd,
  //   obj.s p a c e
  // );

  const person1 = {
	name: '홍길동',
	age: 24,
	school: '한국대',
	major: '컴퓨터공학'
  };
  
  console.log(person1);
  delete person1['major'];
console.log(person1);

const product1 = {
	name: '노트북',
	color: 'gray',
	price: 800000
  }
  
  function addModifyProperty (obj, key, value) {
	// obj.key = value; // ⚠️ 의도와 다른 작업 수행
	obj[key] = value;
  }
  function deleteProperty (obj, key) {
	// delete obj.key // ⚠️ 의도와 다른 작업 수행
	delete obj[key];
  }
  addModifyProperty (product1, 'price', 750000);
  console.log(product1);

  addModifyProperty (product1, 'inch', 16);
console.log(product1);

deleteProperty(product1, 'color');
console.log(product1);

//1. 객체 선언 시 프로퍼티 키와 대입할 상수/변수명이 동일할 시 단축 표현
function createProduct (name, price, quantity) {
	return { name, price, quantity };
  }
  
  const product11 = createProduct('선풍기', 50000, 50);
  const product2 = createProduct('청소기', 125000, 32);
  
  console.log(product11, product2);

//method
// 일반 함수 프로퍼티 정의
const person = {
	name: '홍길동',
  
	salutate: function (formal) {
	  return formal
	  ? `안녕하십니까, ${this.name}입니다.`
	  : `안녕하세요, ${this.name}이에요.`;
	}
  }
  console.log(person.salutate(true));
// ⭐️ 메서드 정의
const personn = {
	name: '홍길동',
	
	salutate (formal) {
	  return formal
	  ? `안녕하십니까, ${this.name}입니다.`
	  : `안녕하세요, ${this.name}이에요.`;
	}
  }
  console.log(personn.salutate(true));



//constructor
// 생성자 함수
{
function YalcoChicken (name, no) {
	this.name = name;
	this.no = no;
	this.introduce = function () {
	  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
	}
  }
// 인스턴스 생성
const chain1 = new YalcoChicken('판교', 3);
const chain2 = new YalcoChicken('강남', 17);
const chain3 = new YalcoChicken('제주', 24);

console.log(chain1, chain1.introduce());
console.log(chain2, chain2.introduce());
console.log(chain3, chain3.introduce());
}
{
function createYalcoChicken (name, no) {
	return {
	  name, no,
	  introduce () {
		return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
	  }
	}
  }
  
  const chain1 = createYalcoChicken('판교', 3);
  const chain2 = createYalcoChicken('강남', 17);
  const chain3 = createYalcoChicken('제주', 24);
  
  console.log(chain1, chain1.introduce());
  console.log(chain2, chain2.introduce());
  console.log(chain3, chain3.introduce());
}


  //prototype
  function YalcoChicken (name, no) {
	this.name = name;
	this.no = no;
	this.introduce = function () {
	  return `안녕하세요, ${this.no}호 ${this.name}점입니다!`;
	}
  }
  const chain1 = new YalcoChicken('판교', 3);
  console.log(chain1);
  // 본사에서 새 업무를 추가
// 프로토타입: 본사에서 배포하는 메뉴얼이라고 이해
YalcoChicken.prototype.introEng = function () {
	return `Welcome to Yalco Chicken at ${this.name}!`;
  };
  console.log(chain1.introEng());
  console.log(new YalcoChicken('강남', 17).introEng());
  