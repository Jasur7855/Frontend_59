function sum() {
  let result = document.getElementById("result");
  let c = a + b;
  result.innerHTML = "Результат: " + c;
}
function devision() {
  let a = +document.getElementsByName("a")[0].value;
  let b = +document.getElementsByName("b")[0].value;
  let result = document.getElementById("result");
  let c;
  if (b == 0) {
    c = "На ноль делить нельзя";
  } else {
    c = a / b;
  }
  result.innerHTML = "Результат: " + c;
}
function calc() {
  let a = +document.getElementsByName("a")[0].value;
  let b = +document.getElementsByName("b")[0].value;
  let result = document.getElementById("result");
  let btn = event.target;
  let c = btn.innerHTML;

  if (c == "+") {
    let d = a + b;
    result.innerHTML = "Результат: " + d;
  } else if (c == "-") {
    let d = a - b;
    result.innerHTML = "Результат: " + d;
  } else if (c == "*") {
    let d = a * b;
    result.innerHTML = "Результат: " + d;
  } else if (c == "/") {
    let d = a / b;
    result.innerHTML = "Результат: " + d;
  } else {
    result.innerHTML = "Я не поня что вы хотите от меня";
  }
  // result.innerHTML= "Результат: " + c
}

function courseSale() {
  const courseName = document.getElementById("courseName").value;
  const PYTHON_PRICE = 12000000;
  const FRONTEND_PRICE = 14000000;
  const UX_UI_PRICE = 9000000;
  let price;
  if (courseName == "none") {
    price = 0;
  } else if (courseName == "py") {
    price = PYTHON_PRICE;
  } else if (courseName == "fr") {
    price = FRONTEND_PRICE;
  } else if (courseName == "ux") {
    price = UX_UI_PRICE;
  } else {
    price = "Ты кто вообще";
  }
  const discountRange = document.getElementById("discountRange").value
  const discountValue = document.getElementById("discountValue")
  discountValue.innerHTML = discountRange +"%"
  const sum = price/100*(100-discountRange)
  const resultValue = document.getElementById("sale")
  resultValue.value=sum
}
