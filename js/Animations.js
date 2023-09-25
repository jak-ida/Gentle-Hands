
function reveal() {
    var reveals = document.querySelectorAll(".reveal-fade-up");
    var reveals2 = document.querySelectorAll(".reveal-fade-up-2");
    var reveals3 = document.querySelectorAll(".reveal-fade-up-3");
    var revealLeft = document.querySelectorAll(".reveal-fade-left");
    var revealRight = document.querySelectorAll(".reveal-fade-right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals2[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals2[i].classList.add("active");
        } else {
          reveals2[i].classList.remove("active");
        }
      }
      for (var i = 0; i < reveals3.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals3[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals3[i].classList.add("active");
        } else {
          reveals3[i].classList.remove("active");
        }
      }
    for (var i = 0; i < revealLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          revealLeft[i].classList.add("active");
        } else {
          revealLeft[i].classList.remove("active");
        }
      }
      for (var i = 0; i < revealRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealRight[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          revealRight[i].classList.add("active");
        } else {
          revealRight[i].classList.remove("active");
        }
      }
  }
  
  window.addEventListener("scroll", reveal);
  

  /* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=+267 73440666" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function() {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new")
        .addClass("show")
        .removeClass("hide"),
      $(".home-chat,.head-home")
        .addClass("hide")
        .removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function() {
    $("#whatsapp-chat")
      .addClass("hide")
      .removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function() {
    $("#whatsapp-chat")
      .addClass("show")
      .removeClass("hide");

      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      document.getElementById('wa-time').innerHTML = "" + hours + ":" + minutes + ""; 
  });


