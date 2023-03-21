
console.log(this);

const SALUT = 'Hello,';
let	person = 'Bob';

console.log(SALUT, person);
person = 1; //JS는 동적 타입을 가졌다. (C는 정적 타입)
console.log(person); //메모리상 가리키는 위치가 바뀜.

//undefined
let	x;
console.log(typeof x);
//undefined 도 값이다.
//아무것도 반환하지 않는 구문은 undefined를 반환함.

//백틱 - `
let word = `헬로헬로~ 🤩`;
console.log(word);

//템플릿 리터럴
const NAME = '홍길동';
let age = 20;
let married = false;

console.log(
`제 이름은 ${NAME}, 나이는 ${age}세구요, \
${married ? '기혼' : '미혼'}입니다.`
);