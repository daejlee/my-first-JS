// 자바스크립트에는 정수와 실수의 자료형이 따로 있지 않음
let integer = 100;
let real = 1.234;
let negative = -5.67;

console.log(
  typeof integer,
  typeof real,
  typeof negative
);

//infinity
let x = 1 / 0;
console.log(x, typeof x);

//NaN
x = 1 / 'abc';
let y = 2 * '가나다';
let z = NaN;

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//boolean
console.log(
	true === !false,
	!(1 == '1'),
	!(1 === '1'),
	!(typeof false === 'boolean')
  );

//ternary operator
let num = 103247;

console.log(
  'num은 3의 배수' +
  (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

//Truthy, Falsy
console.log(
	0 ? true : false,
	-0 ? true : false,
	'' ? true : false,
	null ? true : false,
	undefined ? true : false,
	NaN ? true : false,
  );
// 💡 어떤 값들은 false로 타입변환됨
console.log(
	0 == false,
	0 === false,
	'' == false,
	'' === false
  );
  console.log(
	null == false,
	undefined == false,
	NaN == false,
  );

  // ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
	!!1, !!-999, !!'hello',
	!!0, !!'', !!null
  );

//?? - null, undefined만 대체
let k;
k ?? console.warn(k, 'k 값이 없습니다.');

k = 0;
k ?? console.warn(k, 'k 값이 없습니다.');

k = null;
k ?? console.warn(k, 'k 값이 없습니다.');