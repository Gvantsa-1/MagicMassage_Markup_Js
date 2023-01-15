const active = document.querySelectorAll(".active");
const slidercont = document.querySelector(".sliderCont");
const slider = document.querySelectorAll(".reviewContainer");
const icon = document.querySelectorAll(".faqArrow");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");

for (let i = 0; i < answer.length; i++) {
  question[i].addEventListener("click", (event) => {
    answer[i].classList.toggle("displayNone");
    icon[i - 1].classList.toggle("rotate");
  });
}
console.log(icon);
function display() {
  document.getElementById("myID").style.marginLeft = +165 + "px";
}

const changeSlider = (e) => {
  slidercont.style.marginLeft = `${e}%`;
};
