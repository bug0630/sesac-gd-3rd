// for문
/*
    for (for문 내에서 사용할 변수 선언; 조건식(어디까지 증가/감소할지 작성); 증감){
        반복할 코드
    }
 */
// i++: 변수 i에서 값을 꺼낸 뒤, 1을 더함
// i--: 변수 i에서 값을 꺼낸 뒤, 1을 뺌
// i + 1= i/ i += 1 / i++ -> 모두 동일함
// i - 1= i/ i -= 1 / i-- -> 모두 동일함
// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림 (i++는 1씩만)

for (let i = 0; i < 10; i += 3) {
  //   console.log("안녕", i);
}

for (let i = 5; i > 0; i--) {
  console.log(i);
}

let n = 10;
let result = 0;

for (let i = 1; i <= n; i++) {
  result = result + i;
}
console.log(result);

let cafe = ["americano", "latte", "espresso", "tea"];

console.log(cafe[0]);

for (let i = 0; i < cafe.length; i++) {
  console.log("cafe menu", cafe[i]);
}
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;
for (let i = 0; i < numArr.length; i++) {
  numSum += numArr[i];
  console.log(numSum);
}
const two = 2;
for (let i = 1; i < 10; i++) {
  console.log("${two} ", two * i);
}

// ----------------
// while 문
/*
  while (조건) {
    조건에 만족하는 동안 실행될 코드
  }
*/
// 조건을 제어하는 구문이 없기 때문에 무한 루프에 빠지지 않도록 주의해서 사용

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

num = 9;
while (num >= 4) {
  console.log(num);
  num--;
}
// while문 사용해 1부터 10까지 짝수 출력
console.log("-------------------");
num = 1;
while (num <= 10) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
num = 10;
while (num > 0) {
  if (num % 2 === 1) {
    console.log(num);
  }
  num--;
}
console.log("-------------------");
let zero = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    zero += i;
  }
}
console.log(zero);

console.log("-------------------");
let pracNum = 0;
let pracSum2 = 0;

while (pracNum <= 100) {
  if (pracNum % 2 === 0 || pracNum % 5 === 0) {
    pracSum2 += pracNum;
  }
  pracNum++;
}
console.log(pracSum2);

let input = Number(prompt("숫자를 입력해 주세요"));
for (let i = 0; i <= input; i++) {
  if (i % 13 === 0 && i % 2 === 1) {
    console.log(i);
  }
}

for (let i = 2; i <= 9; i++) {
  console.log(i + "단");
  for (let j = 1; j <= 9; j++) {
    console.log(i + "단", i * j);
  }
}
