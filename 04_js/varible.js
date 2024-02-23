let a = 5;
let b = 3;
alert(a + b);
// 변수선언
var varName;
varName = "layla";

console.log(varName);
// 변수 재할당
var name = "yuki";
console.log(varName);
// 변수 선언과 값 할당을 동시에

var varName2 = "layla2";

// var의 이상한 점
// 변수를 동일한 이름으로 재선언 할 수 있음
var varName = "lily";

console.log(varName); //lily를 출력
// 2. 변수를 선언하기 전 값을 할당할 수 있음
// 유지보수할 때 최악
aa = 123;
console.log(aa);

//let 키워드
// 1. 변수 선언->값 할당
// 2.변수 선언과 값 할당을 동시에

// 변수 선언
let letName;
// 값 할당
letName = "홍길동";
//변수 선언과 값 할당을 동시에
let letName2 = "심청";
alert(letName2);
// 중복 선언 불가

letName2 = "심봉사"; //재할당 가능
console.log(letName2);

// const 키워드
// - 반드시 변수 선언과 값 할당이 동시에 이뤄져야 함
// - 변수 재선언, 재할당 불가능
// 사용처 : 변하지 않는 값을 변수에 저장할 때 사용
//const constName;  error: 선언과 동시에 값 할당 필요
const constName = "layla";
console.log(constName); // layla

/*
    정리
    -var: es6 이전에 사용하던 변수선언 키워드 -> 사용 지양하자
    -let: 변수 선언 키워드
     -변수 선언 -> 값 할당
     -변수 중복 선언은 불가능하지만 재할당은 가능
    -const: 상수 선언 키워드
     -상수: 변하지 않는 값
     -변수 선언과 값 할당을 동시에 해야 함
     -재선언, 재할당 불가능

     식별자 규칙
    : 변수에 이름을 지정할 떄 사용하는 단어(변수명, 함수명 등)
    - 키워드 사용 불가
     -키워드: 특별한 역할을 이미 하고 있는 단어
     -ex. var, let, const, if, function, for
    - 숫자로 시작 불가
    - xmrtnanswksms _, $ 만 허용
    - 공백 문자 사용 불가
    
    사용 가능한 식별자
    content, first, box
    사용 불가능한 식별자
    var, let, const, 1st, my name,my-name
*/
