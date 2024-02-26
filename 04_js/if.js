/*
    조건문
    - 어떤 조건에 따라 논리 구조를 나눔
    - 각 조건을 '분기'라고 함
    - 조건에 따라 서로 다른 문장을 실행
*/

/*
    if문의 기본 구조

    if(조건) {
        조건이 참인 경우 실행될 코드
    }
*/
let i = 5;

// 조건이 하나만 있는 경우
if (i > 3) {
  console.log("a");
}

if (i > 7) {
  alert("b"); //조건이false이므로 실행되지 않음
}

// let number = Number(prompt("숫자를 입력해 주세요"));

// else if문
// if else문에 다른 조건을 추가하는 형식
// else문은 하나만 사용 가능 하지만 else if문은 여러개 사용 가능
// if (number > 10) {
//   console.log("입력받은 수가 10보다 큽니다");
// } else if (number === 10) {
//   console.log(" 10");
// } else if (number < 10) {
//   console.log("입력받은 수가 10보다 작습니다");
// }

// 성적 계산하는 프로그램
// const score = Number(prompt("점수를 입력해주세요"));

// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
// 위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false였음을 잊지 말기
// if (score > 100) {
//   console.log("점수가 잘못 입력되었습니다");
// } else if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log("재시험");
// }
console.clear();

// let age = Number(prompt("나이를 입력해 주세요"));

// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else {
//   console.log("유아");
// }

console.log("---------------");
// 조건문 중첩하기
// 조건문 안에 조건문 작성 가능

const userId = "user01";
const userPw = "1234qwer";

function loginUser() {
  const inputId = prompt("아이디를 입력해주세요.");
  const inputPw = prompt("비밀번호를 입력해주세요.");
}

// if (userId === inputId) {
//   if (userPw === inputPw) {
//     console.log("로그인 성공");
//     alert("안녕하세요, ${inputId}님 ");
//   } else {
//     console.log("로그인 실패");
//     alert("비밀번호를 다시 입력해주세요 ");
//   }
// } else if (inputId === "") {
//   alert("아이디가 입력되지 않았습니다");
// }

// switch문

// switch의 괄호 안과 case으 ㅣ조건으로 비교식이 들어갈 수 없음

let x = 5;
switch (x) {
  case 3:
    console.log("x=3");
    break;
  case 4:
    console.log("x=4");
    break;
  // break 작성하지 않으면 case 4를 실행하고 싶을 때 case 5까지 모두 실행됨
  // 해당 스코프를 빠져나오지 못함
  // 원하는 코드가 실행된 이후 꼭 break 사용ㅇ해 스코프를 빠져나올 수 있도록 작성
  case 5:
    console.log("x=5");
    break;

  default:
    console.log("x는 3,4,5,가 아닌 다른 값");
}

// if문으로 작성한 성적 계산하는 프로그램 switch문 사용하도록 수정

// switch (number) {
//   case 100:
//     console.log("A");
//     break;
//   case 90:
//     console.log("B");
//     break;
//   case 80:
//     console.log("C");
//     break;
//   case 70:
//     console.log("D");
//     break;
// }
let number = Number(-10);
switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("f");
}

// 삼항연산자
// 조건식 ? 조건이 참 일때 실행될 코드 : 조건이 거짓일 때 실행될 코드
// 홀수, 짝수 판별하기

let num = 5;
if (num % 2 === 1) {
  console.log("홀수");
} else {
  console.log("짝수");
}
console.log(num % 2 === 1 ? "홀수" : "짝수");
num % 2 === 1 ? "홀수" : "짝수";

let fruit = "banana";
console.log(fruit === "banana" ? "바나나" : "바나나가 아닙니다");

let now = new Date().getHours();
console.log(now < 12 ? "오전" : "오후");
