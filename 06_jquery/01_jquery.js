// jquery
// $('css 선택자').동작함수
// - $ : 식별자
// - $() : HTML 요소를 선택하는 함수
// 해당하는 모든 ㅇ소가 선택됨 -> querySelectorAll과 비슷
// 여러개의 요소에 동일한 동작을 구현할 때 반복문으로 돌면서 지정할 필요  X
// 한 번에 여러 요소를 동시에 조작할 수 있음 -> jquery 함수가 알아서 처리
console.log($(".testSelector"));

// 선택자는 우리가 이전에 선택했던 방법과 다르게 jquery를 사용하기 만들어진
// 함수이기 때문에 원래 document.querySelector 등으로 선택했던 요소를 다루는
// 방식으로 다룰 수 없음
// 아래 코드는 에러 발생
// $(".testSelector").addEventListner("click", () => {
//   alert("click");
// });

// ----------------------------------
// .val() : input의 값을 가져오기 & 수정하기

// .val() value값 가져오기
// js사용
// function useVal() {
//   const value = document.querySelector("input").value;
//   console.log(value);
// }

function useVal() {
  const value = $("input").val();
  console.log(value);
}

// .val() value값 수정하기
$("input").val("수정할 값 작성하기");
// document.querySelector('input').value='js 사용해 값 수정하기'

// --------------------------
// attr('속성','속성값') : 요소의 속성을 추가, 수정, 가져오기
function useAttr() {
  // jquery
  //   input 요소에 placeholder 속성 추가하기
  $("input").attr("placeholder", "이름을 입력하세요");
  //   input 요소의 type을 checkbox로 변경
  $("input").attr("type", "checkbox");
}

// js
// setAttribute와 getAttribute 사용해 속성의 값을 추가, 수정, 가져왔음
// --------------------
// text() : 요소의 content 중 text만 가져오거나 수정
function useText() {
  $("#span").text("hi");
  //   js의 innerText와 동일
}

function useHTML() {
  $("#span").html("html");
}
function useCss() {
  $("#span").css("font-size", "20px");
}

// -----------
// append(), prepend(), before(), after()
function useAppend() {
  // append() : 선택된 요소의 마지막에 인자로 작성된 요소 추가
  // .container 마지막 자식으로 요소 추가
  //   텍스트 작성 가능, html 형식으로 작성 시 반영됨
  //   $(".container").append('<div class="box red"></div>');
  // prepend() : 선택된 요소의 첫 번째 자식으로 인자에 작성된 요소 추가
  $(".container").prepend('<div class="box yellow"></div>');
  //   before() : 선택된 요소의 앞에 인자로 전달된 요소 추가
  //   red라는 클래스를 가진 모든 요소의 앞에 div.orange 요소 추가됨
  // 반복문으로 돌면서 지정하지 않아도 모든 요소에 지정됨 -> jquery가 알아서 지정
  $(".red ").before('<div class="box orange"></div>');
  //   css선택자를 자세하게 작성해서 특정 요소만 선택할 수 있음
  //   $(".red:first-child").before('<div class="box orange"></div>');
}
// remove(), empty()
// remove() : 선택된 요소 삭제
// red라는 class 를 가진 요소 삭제
function useRemove() {
  $("#red").remove();
}

function useParent() {
  // parent() === js parentNode
  console.log("parent", $("#red").parent());

  //   parents() = 부모, 조상 포함 모든 상위요소
  console.log("parents", $("#red").parents());

  //   next() : 자신의 다음 형제 요소
  //  === js nextElemenstSibling
  console.log($("#red").next());
  //   prev() : 자신의 이전 형제 요소
  // === js previousElementSibling
  //   해당 요소의 이전 형제 요소 콘솔에 출력
  console.log("prev", $(".container .box:nth-child(2)").prev());

  $(".container").children().css("background-color", "yellow");
}
// ----------------------------
// addClass(), removeClass() , hasClass(), toggleClass()
function controlClass() {
  //   $(".controlClass").addClass("red");
  $(".controlClass").removeClass("text"); //특정 클래스 제거
  //   $(".controlClass").removeClass(); //모든 클래스 제거
  console.log($(".controlClass").hasClass("red")); //클래스 포함 여부t/f

  $(".controlClass").toggleClass("red");

  //   document.querySelector(".controlClass").classList.toggleClass("red");
}
