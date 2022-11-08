//Burger
const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");
// console.log('działam');
// console.log(burger);



burger.addEventListener("click", function () {
  for (let i = 0; i < activeElement.length; i++) {
    activeElement[i].classList.toggle("show");
    // console.log('działam1');
  }
});
