// click 이벤트
$(".container").click((e) => {
  console.log(e);
  console.log(e.target); //event가 발생한 요소
  //   $(".container").css("background-color", "skyblue");
  $(e.target).css("background-color", "skyblue");
});
// mouseover, mouseout 내비게이션 바에서 해당 요소가 보이고, 내비게이션 바를 마우스가 나가면 사라질 때 많이 사용
$(".container").mouseover((e) => {
  $(e.target).css("background-color", "red");
});
$(".container").mouseout((e) => {
  $(e.target).css("background-color", "blue");
});

// hover 이벤트 -> css에서 더 많이 작성
// mouseover, mouseout을 한 번에 지정

// 첫 번째 인자인 콜백함수는 mouseover일 때
// 두 번째 인자인 콜백함수는 mouseout일 때
$(".container").hover(
  () => {
    console.log("mouse on");
  },
  () => {
    console.log("mouse out");
  }
);

$(document).scroll(() => {
  if ($(document).scrollTop() > 2500) {
    console.log("scroll");
  }
});

$("input[name=pw]").keydown((e) => {
  console.log(e);

  if (e.key === "enter") {
    console.log("enter");
    console.log(e.target.value);
  }
});
// keyup 이벤트
// on() : 이벤트를 걸겠다. addEventlistner 와 비슷
$("input[name=pw]").on("keyup", (e) => {
  if (e.key === "enter") {
    console.log(e.target.value);
  }
});
