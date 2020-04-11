

var page=0;

function myFunction(button) {
var x=button.id;
  var dots = document.getElementById("dots"+x);
  var moreText = document.getElementById("more"+x);
  var btnText = document.getElementById(x);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
 function pageRedirect(button) {
 var x=button.id;
        window.location.replace( "https://hs1121.github.io/html/page2.html");
    }
