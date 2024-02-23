console.log("connected!");

// 대입 연산자

// =
// 변수에 값을 할당할 때 사용하는 연산자

// 비교 연산자
// ==, !=
// 피연산자의 값이 같은지 비교
// 타입이 달라도 괜찮음 -> 값만 비교하기 때문
console.log(1 == 1);
console.log(1 == 2);
console.log(1 == "1");
console.log(1 === "1");
console.log(1 != "1");
console.log(1 != "2");
// ===,!==
// 피연산자의 값과 타입을 모두 비교
// 엄격한 동등
console.log("---------------");

// 크기 비교
// >, >=, <, <=
console.log(2 > 1);
console.log(1 >= 1);

// 산술 연산자
// +, -< *, /, %(나머지), **(제곱)
console.log("---------------");
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(1 % 2);
console.log(1 ** 2);
console.log(2 ** 2);

// 논리 연산자
// !, &&, ||
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(true && true);
console.log(1 > 2 && 1 < 5);
console.log(false || true);

// 코드 결고 작성
3 <= 1; // false
7 ==
  "7" - // true
    10 >=
    -11; // true

const a = 2;
const b = 3;
console.log(a, b); //자동으로 띄어쓰기 됨
console.log(a + "3"); //전부 연결해서 출력

// "안녕 나는 레일라야"
const name = "layla";
console.log("안녕 나는", name, "야");
console.log("안녕 나는" + name + "야");
