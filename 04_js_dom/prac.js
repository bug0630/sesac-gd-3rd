function calc() {
  const v1 = Number(document.querySelector("#value1").value);
  const v2 = Number(document.querySelector("#value2").value);
  const op = document.querySelector("#operator").value;
  let result;

  if (op === "+") {
    result = v1 + v2;
  } else if (op === "-") {
    result = v1 - v2;
  } else if (op === "/") {
    result = v1 / v2;
  } else if (op === "*") {
    result = v1 * v2;
  } else {
    result = "오류 발생";
  }
  document.queryselector("#result").value = result;
}
const calcBtn = document.queryselector("#calc");
calcBtn.addEventListner("click", calc);

function resetInput() {
  document.querySelector("#value1").value = "";
  document.querySelector("#value2").value = "";
  document.querySelector("#operator").value = "";
  document.querySelector("#result").value = "";
}
