//  문자열에서 사용 가능한 속성과 메소드
// length, toUpperCase, toLowerCase, trim, split,
// indexOf, replace, replaceAll, slice, repeat
// 메서드는 자바스크립트에서 만들어놓은 함수 -> 그래서 뒤에 괄호가 붙음
let str = "strawberry Moon";
let str2 = "   strawberry Moon   ";
console.log(str[0]);
console.log(str[0] + str[12] + str[14] + str[14] + str[9]);

console.log("str 문자열의 길이", str.length);
console.log("str 문자열의 길이", str2.length);
console.log("str 문자열의 길이", str2);

let msg = "Happy Birthday~";
let userId = "            user123";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.length);
console.log(userId.trim());
console.log(userId.trim().length);
console.log(userId.trim().toUpperCase());

// 인자 있는 메서드: XX.method(arg) 형태
// - indexOf(): 문자열에서 인자로 받은 문자열의 인덱스를 반환, 없다면 -1 반환
// - replace(교체될 값, 대신 들어갈 값): 교체될 값의 문자를 대신 들어갈 값으로 변환->제일 처음에 만난 문자만 변환
// - replaceAll(교체될 값, 대신 들어갈 값): 해당하는 모든 문자를 변환
// - slice(startIdx[,endIdx]): startIdx ~ endIdx -1 까지 자름 (음수 인덱스 가능)
// - repeat(n): 문자열을 n번 반복
// - split(): 인자로 받은 문자열을 기준으로 해당 문자열을 나누고, 나눈 문자열을 배열로 만들어 반환
// - chatAt(n): 인자로 받은 숫자 n 인덱스 번호에 대한 문자열 하나 반환

let fruit = "applemango";
console.log(fruit.indexOf("mango"));
console.log(fruit.indexOf("e"));
console.log(fruit.indexOf("z"));
console.log(fruit.charAt(8));

console.log(fruit.slice(5)); // mango
console.log(fruit.slice(3, 6)); // lem
console.log(fruit.slice(0, -1)); // applemang

let msg2 = "wow! its so amazing! ";
console.log(msg2.replace("wow", "OMG"));

let date = "2024.02.28";

console.log(date);
console.log(date.replaceAll(".", "-"));
console.log("2024.02.28".replaceAll(".", "-"));
console.log("HelloWorld".repeat(5));

console.log(date.split("."));
console.log(date.split(""));

let spliteDate = date.split(".");
console.log(typeof splitedDate);

let arr1 = ["1", "2", "3"];
let arr2 = ["quakka", "panda", "dog", "capybara"];

arr1[5] = 6;
console.log(arr1);
arr1.push(10);
console.log(arr1);
// push(): 배열의 가장 마지막에 해당 요소 추가

arr1.pop();
arr1.pop();
arr1.pop();
arr1.pop();
console.log(arr1);
// pop(): 배열 마지막 요소 제거

arr2.unshift("bear");
console.log(arr2);
// shift(): 맨 앞 요소 제거
// unshift(): 맨 앞에 요소 추가

// push, pop, unshift, shift
// -> 문자열에서 메서드를 사용한 것과 다르게 원래의 배열이 변경됨

// includes(): 해당 배열에 인자로 받은 값과 동일한 요소가 있는지 확인 후 t/f를 변환
console.log(arr2.includes("quakka"));

// indexOf(): 문자열과 마찬가지로 해당 요소의 인덱스를 반환
console.log(arr2.indexOf("capybara"));

// length -> 속성이므로 괄호 작성x
console.log(arr2.length);

// reverse(): 배열의 순서를 뒤집음

console.log(arr2.reverse());

// join(): 배열을 인자의 문자열 기준으로 합쳐 문자열로 반환
// 원래 배열을 변경시키지 않음
console.log(arr2.join()); //인자를 작성하지 않으면 배열 안의 컴마까지 문자열로 변환
console.log(typeof arr2.join());
console.log(arr2.join("")); //빈 문자열 작성시 모든 요소가 붙어서 문자열로 변환
console.log(arr2.join("-"));
console.log(arr2);

// ---------------------------------------------------------------------------
// 배열에서의 반복문
// for
let arr3 = [1, 2, 3, 4, 5];
let alphabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.lengh; i++) {
  console.log(arr3);
}
// for of
// 여기서 number는 for of문에서 내가 지어준 변수명
// 무엇을 의미하는지 알 수 있도록 작성
// index 번호는 순환하는 것이 아니라 배열 요소에 직접 접근

for (let number of arr3) {
  console.log(number);
}
for (let alphabet of alphabets) {
  console.log(alphabet);
}
// for each
// 매개변수 3개를 받는 배열의 반복을 위한 메서드(=함수)
// 매개변수 이름은
/*
 마음대로 지어도 상관 없지만 순서에 따른 의미는 동일
/*
    arr.forEach(function(요소를 지칭할 별명 [인덱스를 지칭할 별명[arr를 지칭할 별명]]) {

    })
*/
console.log("forEach를 사용한 배열에서의 반복");
arr3.forEach(function (num, idx) {
  console.log("num:", num);
  console.log("idx:", idx);
});
// -----------------
// filter()
// 조건을 만족하는 요소들을 배열로 변환
// arr2의 요소 중 길이가 5자 이상인 요소만 모아 새로운 배열 만들기
let newArr2 = arr2.filter(function (animal) {
  return animal.length >= 5;
});
let newArr3 = arr2.filter((animal) => {
  return animal.length >= 5;
});
console.log(newArr2);
console.log(arr2);
// find(): 배열에서 특정 조건을 만족하는 첫 번째 요소 반환
// filter와 비슷하게 조건 작성하지만 배열을 반환하는 것이 아닌 조건을 처음 만족하는 '값'을 반환

// map(): 배열 내의 모든 원소에 대해 호출한 함수의 결과를 모아 새로운 배열 반환
// arr,map(function(value[]))
// 배열의 모든 원소를 for문으로 돌려서 바꿀 수 있지만 더 간단한 메소드를 사용해 변경 가능
let nums = [1, 2, 3, 4, 5];
let mapArr = nums.map(function (n) {
  return n * 100;
});
console.log(mapArr);

console.log(mapArr);

let numArr = [];

for (let i = 0; i < 100; i++) {
  numArr.push(i + 1);
}

let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
  sum1 = sum1 + numArr[i];
}
console.log(sum1);

let sum2 = 0;
// numArr 배열에 있는 모든 요소를 num이라고 지정하면서 반복한다.
for (let num of numArr) {
  sum2 += num;
}
console.log(sum2);

let sum3 = 0;
numArr.forEach(function (num) {
  sum3 = sum3 + num;
});
console.log(sum3);
