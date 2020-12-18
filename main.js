//  boxEl.classList.toggle("boxColorChange");function themeChange() {
//   let lightEl = document.querySelector("#light");
//   let bodyEl = document.querySelector("body");

//   lightEl.addEventListener("change", function () {
//     bodyEl.classList.toggle("bodyColorChange");

//   });
// }
// themeChange();

function themeChange() {
  let lightEl = document.querySelector("#light");
  let bodyEl = document.querySelector("body");
  let boxEl = document.querySelectorAll(".them-change");

  lightEl.addEventListener("change", function () {
    bodyEl.classList.toggle("bodyColorChange");

    for (i = 0; i < boxEl.length; i++) {
      boxEl[i].classList.toggle("boxColorChange");
    }
  });
}
themeChange();

// changeThem();
// function changeThem() {
//   let lightEl = document.querySelector("#light");
//   let smallBox = document.querySelectorAll(".smallBox");
//   lightEl.addEventListener("change", function () {
//     for (j = 0; j < smallBox.length; j++) {
//       smallBox[i].classList.toggl("boxColorChange");
//     }
//   });
// }
