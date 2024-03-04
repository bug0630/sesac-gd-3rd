/* 
    JS 표준 내장 객체
    자바스크립트가 기본적으로 가지고 있는 객체
    String, Number, Array, Date, Math, ...
*/

// 1. Date 객체
// 시간, 날짜에 대한 정보를 얻기 위해 사용

// 현재 날짜
let now = new Date();
console.log(now); //Mon Mar 04 2024 11:48 GMT+0900 (한국 표준시)

// 1000ms =1s
// 1000ms * 10*60*60 === 1s *60 *60 = 1h
// 1000ms *3600*24===24h

let jan_02_1970 = new Date(1000 * 3600 * 24);
console.log(jan_02_1970);

// new Date(year, month, date,hour,minutes, seconds, ms)
// year: 4자리
// month: 0(1월) ~11(12월)
// date : 1~31 /값이 없으면 1로 처리
// hour, minutes, seconds, ms\
console.log(new Date(2021, 2, 15, 18, 30, 15));

// Date 객체 메서드
// 연, 월, 일 등의 값을 얻을 수 있음
console.log(now.getFullYear());
console.log(now.getFullYear() + "년");
console.log(now.getMonth() + "월");
console.log(now.getDate() + "일");
console.log(now.getHours() + "시");
console.log(now.getMinutes() + "분");
console.log(now.getSeconds() + "초");

console.log(now.getDay());
function weekend() {
  switch (now.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "평일";
    case 6:
    case 0:
      return "주말";
    default:
      return "알수없음";
  }
}

const todayStatus = now.getDay() === 0 || now.getDay() === 6 ? "주말" : "평일";
console.log(todayStatus);

// Math 객체
// 수학적인 상수와 함수를 위한 메서드

// 속성

console.log(Math.PI);
console.log(Math.E); //자연로그
console.log(Math.SQRT2); //2의 제곱근

//메서드
console.log(Math.min(10, 2, 6, -50)); // 인자로 전달받은 값 중에서 최소 값
console.log(Math.max(10, 2, 6, -50)); // 인자로 전달받은 값 중에서 최대 값
console.log(Math.random()); // 0<=x<1 난수 생성
console.log(Math.round(3.4)); //소수를 반올림하여 정수로 변환
console.log(Math.floor(3.4)); //소수를 버림하여 정수로 변환
console.log(Math.ceil(3.4)); //소수를 올림하여 정수로 변환

// Math.random()

//0~9 사이의 난수 생성
console.log(Math.floor(Math.random() * 10));
// 0~10 사이의 난수 생성
console.log(Math.floor(Math.random() * 11));

// 1~100사이의 난수 생성
console.log(Math.floor(Math.random() * 101) + 1);
// 20~22사이의 난수 생성
console.log(Math.floor(Math.random() * 3) + 20);
