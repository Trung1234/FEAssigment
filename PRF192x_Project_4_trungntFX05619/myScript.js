
// display the first image at the first time
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// control button event
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var controls = document.getElementsByClassName("control");
  // nếu qua 4 ảnh thì quay trở về ảnh ban đầu
  if (n > slides.length) 
  {
    slideIndex = 1;
  }
  // nếu về 0 thì quay về ảnh 4
  if (n < 1) 
  {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < controls.length; i++) {
      controls[i].className =  controls[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  controls[slideIndex-1].className += " active";
}