// 함수
// -특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
// -함수 정의-> 함수 호출
//  -keyword: function
//  -name: 함수 이름 (camelCase로 많이 작성)
//  -parameter: 함수 선언 시 매개변수로 받을 것
//   -prarameter, arguments, 인자, 매개변수 모두 동일한 의미
//  -body: 함수 내부 코드(Scope라고도 함)
// -함수 정의/ 선언 방식
// -함수 선언문(명시적 함수 선언)
//     -function 키워드 사용
//     -ex. function name(){}
//  -함수 표현식
//      -함수 이름 작성 x -> 변수를 만들어 함수를 저장
//      -JS에서는 함수가 값이기 때문에 가능한 방식

// 함수 정의
function helloWorld1() {
  console.log("helloWorld");
}
helloWorld1(); //함수 선언문으로 작성된 함수는 함수 선언 전 호출 가능

// 2.함수 표현식
// 함수 표현식으로 선언된 함수는 선언 전 호출 불가능

const helloWorld2 = function () {
  console.log("helloWorld2");
};
helloWorld2();

const helloWorld3 = () => {
  console.log("helloWorld3");
};
helloWorld3();

// return 사용
// return: 반환값 -> gkatn soqn zhemdml "최종 결과 값"
// console.log()로 콘솔을 찍는 것에서 긏치지 않고, 함수
// 내부 코드의 최종 결과값을 저장하고, 보관하기 위한 키워드
// -함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단

function onePlusOne() {
  // 인자 없이 return값만 가지고 있는 함수
  return 1 + 1;
}
console.log(onePlusOne());

function numPlusOne(num) {
  return num + 1;
}

console.log(numPlusOne(5));

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 3));

function hello(name) {
  alert("hello!" + name);
}
hello("layla");
