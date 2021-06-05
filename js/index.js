var result = document.getElementById("result");
function clr() {
  result.value = "";
}
function display(val) {
  result.value += val;
}
function equate() {
  let x = result.value;
  let y = eval(x);
  result.value = y;
}
document.addEventListener("keypress", (event) => {
  for (var i = 0; i <= 9; i++) {
    if (event.key == i) {
      result.value += i + "";
    }
  }
  if (event.key == "+") {
    result.value += "+";
  }
  if (event.key == "-") {
    result.value += "-";
  }
  if (event.key == "*") {
    result.value += "*";
  }
  if (event.key == "/") {
    result.value += "/";
  }
  if (event.key == "Enter") {
    equate();
  }
  if (event.key == "c" || event.key == "C") {
    clr();
  }
  console.log(event.key);
});
