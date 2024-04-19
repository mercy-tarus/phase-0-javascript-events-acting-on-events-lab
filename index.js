/** @format */

// Your code here

let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  let left = dodger.style.left.replace("px", "");
  let leftPosition = parseInt(left, 10);

  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 1}px`;
  }
}

function moveDodgerRight() {
  let left = dodger.style.left.replace("px", "");
  let leftPosition = parseInt(left, 10);

  if (leftPosition < 360) {
    dodger.style.left = `${leftPosition + 1}px`;
  }
}
