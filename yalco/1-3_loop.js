//block and scope - first in, first out
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);
{
  let a = 'A';
  let b = 'B'
  console.log('시점 2:', a, b, c);
  {
    let a = '가'
    console.log('시점 3:', a, b, c);
  }
  console.log('시점 4:', a, b, c);
}
console.log('시점 5:', a, b, c);

//if, else, switch -> u know the drill.
//for loop - using more than 2 vars
for (let x = 0, y = 10; x <= y; x++, y--) {
	console.log(x, y);
  }

//for loop in class, arr
//class
const lunch = {
	name: '라면',
	taste: '매운맛',
	kilocalories: 500,
	cold: false
  }
  for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
	console.log(key, ':', lunch[key])
  }
//arr
const list = [1, '가나다', false, null];
for (const item of list) {
  console.log(item);
}
for (const el of list) {
  console.log(el);
}

//for ... of -> safer
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of numbers) {
	console.log(num);
  }

//continue
for (let i = 1; i <= 10; i++) {
	if (i % 3 === 0) continue;
	console.log(i);
  }
  console.log('for 루프 종료');