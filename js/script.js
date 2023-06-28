"use strict";

let slideIndex = 0; //0, 1, 2
let timer;
let dots = document.getElementsByClassName("dot");
let slides = document.getElementsByClassName("mySlides");

function currentSlide(number) {
  clearTimeout(timer);
  slideIndex = number;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  showCurrentDot();
  timer = setTimeout(slideForward, 6000);
}

function slideForward() {
  clearTimeout(timer);
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  console.log(slideIndex);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  showCurrentDot();
  timer = setTimeout(slideForward, 6000);
}

function slideBackward() {
  clearTimeout(timer);
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  console.log(slideIndex);

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  showCurrentDot();
  timer = setTimeout(slideForward, 6000);
}

function showCurrentDot() {
  dots[slideIndex].style.backgroundColor = "black";
  if (slideIndex === 0) {
    dots[1].style.backgroundColor = "white";
    dots[2].style.backgroundColor = "white";
  } else if (slideIndex === 1) {
    dots[0].style.backgroundColor = "white";
    dots[2].style.backgroundColor = "white";
  } else if (slideIndex === 2) {
    dots[0].style.backgroundColor = "white";
    dots[1].style.backgroundColor = "white";
  }
}

showCurrentDot();
slides[slideIndex].style.display = "block";
timer = setTimeout(slideForward, 6000);
