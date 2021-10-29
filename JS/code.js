
function load() {
    var slideIndex = 1;
    showSlides(slideIndex)
}
function geoFindMe() {
    var output = document.getElementById("out");
  
    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }
  
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      output.innerHTML = '<p>Latitude is ' + latitude + ' <br>Longitude is ' + longitude + '</p>';
    }
  
    function error() {output.innerHTML = "Unable to retrieve your location";}
  
    output.innerHTML = "Locating...";
  
    navigator.geolocation.getCurrentPosition(success, error);
    
  }
var username = localStorage.getItem("username")
var name = document.getElementById("un");
function NameCheck() {
  if(!username){
    username = prompt("What shall we call you?");
    localStorage.setItem("username", username);
    name.innerHTML = "Welcome Back" + username;
  }
  else{name.innerHTML = "Welcome Back" + username;}
}

function updatename() {
  var username = localStorage.getItem("username");
  var name = document.getElementById("un");
  name.innerHTML = "Welcome Back " + username;
  {document.getElementById("namebutton").style.display="none";}
  {document.getElementById("un").style.display="inline";}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {showSlides(slideIndex += n);}

function currentSlide(n) {showSlides(slideIndex = n);}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function ChangeName() {
    username = prompt("What shall we call you?");
    localStorage.setItem("username", username);
    name.innerHTML = "Welcome Back" + username;
}

