let mod = document.getElementsByClassName("mod");

function showImg(picNum) {
  mod[0].style.display = "block";
  mod[0].style.top = document.documentElement.scrollTop - 150 + "px";

  if (Number(picNum) == 1) {
    mod[0].style.backgroundImage = "url('../assests/pic1.png')";
  } else if (Number(picNum) == 2) {
    mod[0].style.backgroundImage = "url('../assests/pic2.png')";
  } else if (Number(picNum) == 3) {
    mod[0].style.backgroundImage = "url('../assests/pic3.png')";
  } else if (Number(picNum) == 4) {
    mod[0].style.backgroundImage = "url('../assests/pic4.png')";
  } else if (Number(picNum) == 5) {
    mod[0].style.backgroundImage = "url('../assests/pic5.png')";
  } else {
    mod[0].style.backgroundImage = "url('../assests/pic6.png')";
  }
}

function closeImg() {
  mod[0].style.display = "none";
}
