//const timeElement = document.getElementById("time");
const timeElement = document.querySelector("h1");

function 클릭시_함수() {
  timeElement.style.color = "tomato";
  timeElement.innerText = "12:00";
}

timeElement.addEventListener("click", 클릭시_함수);

document.title = "♥♥♥♥♥♥♥♥♥♥♥♥";
