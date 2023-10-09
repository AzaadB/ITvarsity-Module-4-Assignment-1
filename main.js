/*Functions for changing the images*/

function changeImage() {
  const image = document.getElementById("myImage");
  if (image.src.match("plan")) {
    image.src = "./images/plan.jpg";
  } else {
    image.src = "./images/plan.jpg";
  }
}

function changeImg() {
  const image = document.getElementById("myCat");
  if (image.src.match("boss")) {
    image.src = "./images/boss.jpg";
  } else {
    image.src = "./images/boss.jpg";
  }
}

function change() {
  const image = document.getElementById("myWorst");
  if (image.src.match("laugh")) {
    image.src = "./images/laugh.jpg";
  } else {
    image.src = "./images/laugh.jpg";
  }
}
/*Refresh*/
const refreshTimer = document.getElementById("refresh-timer");

let timerInSeconds = 0;

setInterval(() => {
  timerInSeconds += 1;

  refreshTimer.innerHTML = `Refresh page in: ${timerInSeconds} seconds`;

  if (timerInSeconds >= 3) {
    window.location.reload();
  }
}, 4000);
