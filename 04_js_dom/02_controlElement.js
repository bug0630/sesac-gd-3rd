/*
    1. 태그 내부 content 다루기
    - innerText : 요소 안의 텍스트를 가져오거나 수정
    - innerHTML : 요소 안의 코드를 가져오거나 수정
 */

let div1 = document.getElementById("div1");
console.log(div1);
// 해당 요소 내부의 텍스트 변경
// div1.innerText = "여기는 첫 번째 div 태그이면서 js에서 수정이 있었습니다.";

// 해당 요소 내부의 html 변경
// div1.innerHTML =
// "여기는 첫 번째 div 태그이면서 innerHTML을 사용해 수정했습니다";
// div1.innerHTML =

// ==================
// 2.속성 접근
// 요소.setAttrbute('속성명', '속성값')

// let naver = document.getElementById("naver");
// console.log(naver);

// a태그의 href 속성값 가져오기
// console.log(naver.getAttribute("href"));

// let imgEl = document.getElementById("beach");
// console.log(imgEl.getAttribute("src"));

//속성 수정
// naver.setAttribute("href", "http://www.google.co.kr/");
// imgEl.setAttribute("src", "./img/beach2.jpg");
let flowers = document.querySelectorAll("#flower li");
for (let li of flowers) {
  // li.style.backgroundColor = "skyblue";
  // li.style.color = "green";
  li.classList.add("changeStyle");
}
console.log(flowers[0]);

const parentEl = document.querySelector("#flower");
const childEl = document.querySelector("#flower .pink");

// 자식 노드 선택하기
console.log(parentEl.children);
console.log(parentEl.children[2]);
// 자식 요소에 접근하려면 배열 접근 방식을 따름
console.log(childEl.parentNode); //childEl의 부모를 선택

// pEl 요소 html에 삽입
// append: 선택된 요소의 자식요소로 매게변수 요소가 삽입
