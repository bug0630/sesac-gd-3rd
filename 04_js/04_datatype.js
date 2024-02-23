// 기본형 (Primitive type)
// 1. String
// - 텍스트 정보
// - 따옴표로 감싸야 함
// - 숫자, 특수문자, true, false 모두 따옴표 안에 있으면 문자열임

const myName = "신데렐라";
const email = "glass_shoese@google.com";
const gender = "male";

console.log(myName);
console.log(email);
console.log(gender);

console.log("안녕 나는 ${name}야");

// 2. Number
// 숫자 (정수, 소수)
// 연산 가능
let number = 123;
let opacity = 0.7;
let add = 1 + 2;

// 3.boolean
// true,false 중에서 하나의 값을 가지는 논리 요소

let checked = true;
let isShow = false;
// 4.undefined
// 값도 없고 타입도 지정되어 있지 않은 상태
let undef;
console.log(undef); //undefined
let obj = {
  abc: 123,
};
console.log(obj.abc);
console.log(obj.efg); //undefined -> 없는 것 출력하면 undefined

// 5.null
// 빈 값, null 타입으로 타입 존재하지만 값이 없음
// 값이 없다는 것을 의도적으로 명시할 때 사용 -> 개발자가 직접 null값을 할당
let empty = null;
console.log(empty);

// 6.array - 배열
// 순서가 있는 데이터의 묶음

let fruits = ["apple", "orange", "banana", "grape"];
let fruits2 = new Array("apple", "orange", "banana", "grape");

console.log(fruits[2]); //2번 인덱스 요소를 뽑아 콘솔에 찍기

let arr = [1, "str", false, null, undefined];

const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];
console.log(letters[12] + letters[7] + letters[1] + letters[3] + letters[10]);

// 배열 응용
// 다차원 배열
// 배열 안에 배열이 있는 형태
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
];
console.log(korean[0]);
console.log(korean[1][1]);

const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters2[3][0] +
    letters2[1][3] +
    letters2[0][1] +
    letters2[0][3] +
    letters2[2][2]
);

// 7.object - 객체

// 배열은 순서가 있는 반면에 객체는 키-값 형태로 작성
// {key1: value1, key2: value2, ...}
let cat = {
  name: "장화",
  age: 13,
  isCute: true,
  mew: function () {
    return "냐옹";
  },
};
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew);

console.log(cat["name"]);
console.log(cat["mew"]);

// 변경, 추가 가능
cat.like = "layla";
console.log(cat["like"]);

cat.name = "홍련";
console.log(cat["name"]);

// JS의 자료형 ->데이터 타입
// -기본형 (Primitive)
//  -string, number, boolean, null, undefined
// -객체(Object)
//  -array(배열)
//  -object(객체) ->키-값을 쌍으로 가자ㅣ고 중괄호{} 안에 감싸여 작성된 것

// 문자 + 문자 -> 문자의 나열

// 숫자 + 문자 -> 숫자가 문자로 변환되어 문자의 나열

const introduce = {
  name: "dnd",
  interest: ["money", "dog"],
  hobby: ["sleep", "play-game"],
  mbti: "istp",
};
console.log(introduce.name);

// 자료형 확인
// typeof
// 피연산자의 데잍 타입을 문자열로 변환
console.log("--------------------");
console.log(typeof "문자열");
console.log(typeof 234);
console.log(typeof {});
console.log(typeof []);
console.log(typeof NaN);
let und;
console.log(typeof und);

// let mathScore = prompt("수학 점수를 입력 하세요");
// let engScore = prompt("영어 점수를 입력 하세요");

console.log("--------------------");

// 형변환
// 1. ?-> 문자
let str1 = true;
let str2 = 123;
let str3 = null;
console.log(String(str1));
console.log(typeof String(str1));
console.log(String(str2));
console.log(String(str3));
console.log(str1.toString());
console.log(str2.toString());

// 2. ?-> 숫자
let n1 = true;
let n2 = false;
let n3 = "123";
let n4 = "1234.5";

console.log(Number(n1));
console.log(Number(n2));
console.log(Number(n3));
console.log(Number(n4));
console.log(parseInt(n4)); //소수점 버림
console.log(parseFloat(n4)); //소수점 사용

let mathScore = 77;
let engScore = 88;

let avgScore = (Number(mathScore) + Number(engScore)) / 2;

console.log(avgScore);

// prompt 사용 (사용자에게 값을 입력받아 활용하는 예시)
// prompt로 입력받은 값은 문자열로 저장되기 때문에 숫자형으로 형변환 함
let mathScore2 = Number(prompt("수학 점수를 입력하세요"));
let engScore2 = Number(prompt("영어 점수를 입력하세요"));

let avgScore2 = (mathScore2 + engScore2) / 2;

alert(avgScore2);
