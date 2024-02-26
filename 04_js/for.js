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
