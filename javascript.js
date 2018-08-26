window.onscroll = function() {myFunction()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
 $(document).on("onscroll",function(){
    if($(document).scrollTop()>150){
        $(".nav-placeholder").height($(".nav").outerHeight());
    } else {
        $(".nav-placeholder").height(0);
    }
});
