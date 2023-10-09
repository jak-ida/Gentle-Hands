
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
$(document).on("click", "#send-it", function () {
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
  $(document).on("click", ".informasi", function () {
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
  $(document).on("click", ".close-chat", function () {
    $("#whatsapp-chat")
      .addClass("hide")
      .removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function () {
    $("#whatsapp-chat")
      .addClass("show")
      .removeClass("hide");

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    document.getElementById('wa-time').innerHTML = "" + hours + ":" + minutes + "";
  });



// JavaScript to control slow smooth scrolling
const itemList = document.getElementById("Testimonials");
const itemsToScroll = 3;
const scrollDuration = 8000; // Adjust the duration in milliseconds (2000ms = 2 seconds)
let scrollIndex = 1;

function scrollItems() {
  if (scrollIndex >= itemList.children.length) {

    // Reached the last item or went beyond it
    // Remove the first item and append it to the bottom
    const firstItem = itemList.children[0];
    itemList.removeChild(firstItem);
    itemList.appendChild(firstItem);

    // // Reset scrollIndex to 1 to start scrolling from the new first item
    // scrollIndex = 1;
  }
  var distance = itemList.scrollHeight / itemList.children.length;
  itemList.scrollTop = distance * scrollIndex;
  scrollIndex++;
}

// Set an interval to scroll the items automatically
const scrollInterval = setInterval(scrollItems, 5000); // Adjust the interval as needed (5 seconds in this example)




//Animations for Partners 





// window.addEventListener('resize', function (event) {

//   if (window.innerWidth >= 1000) {
//     // JavaScript to control slow smooth scrolling
//     const partnerList = document.getElementById("Partners");
//     const itemsToScroll = 1;
//     const PartnerScrollDuration = 2000; // Adjust the duration in milliseconds (2000ms = 2 seconds)
//     let partnerScrollIndex = 1;

//     function partnerScrollItems() {
//       if (partnerScrollIndex >= partnerList.children.length) {

//         // Reached the last item or went beyond it
//         // Remove the first item and append it to the bottom
//         const firstItem = partnerList.children[0];
//         partnerList.removeChild(firstItem);
//         partnerList.appendChild(firstItem);

//         // // Reset partnerScrollIndex to 1 to start scrolling from the new first item
//         // partnerScrollIndex = 1;
//       }
//       var distance = partnerList.scrollWidth / partnerList.children.length;
//       partnerList.scrollTop = distance * partnerScrollIndex;
//       partnerScrollIndex++;
//     }

//     // Set an interval to scroll the items automatically
//     const partnerScrollInterval = setInterval(partnerScrollItems, 2000); // Adjust the interval as needed (3 seconds in this example)


//   }




// }, true);


//  // JavaScript to control slow smooth scrolling
//     const partnerList = document.getElementById("Partners");
//     const partnersToScroll = 1;
//     const PartnerScrollDuration = 2000; // Adjust the duration in milliseconds (2000ms = 2 seconds)
//     let partnerScrollIndex = 1;

//     function partnerScrollItems() {
//       if (partnerScrollIndex >= partnerList.children.length) {

//         // Reached the last item or went beyond it
//         // Remove the first item and append it to the bottom
//         const firstItem = partnerList.children[0];
//         partnerList.removeChild(firstItem);
//         partnerList.appendChild(firstItem);

//         // // Reset partnerScrollIndex to 1 to start scrolling from the new first item
//         partnerScrollIndex = 1;
//       }
//       var distance = partnerList.scrollWidth / partnerList.children.length;
//       partnerList.scrollTop = distance * partnerScrollIndex;
//       // partnerScrollIndex++;

//     }
    

//     // Set an interval to scroll the items automatically
//     const partnerScrollInterval = setInterval(partnerScrollItems, 1500); // Adjust the interval as needed (3 seconds in this example)



// JavaScript to control slow smooth scrolling
const partnerList = document.getElementById("Partners");
const partnersToScroll = 1;
const PartnerScrollDuration = 500; // Adjust the duration in milliseconds (2000ms = 2 seconds)
let partnerScrollIndex = 1;

function partnerScrollItems() {
  if (partnerScrollIndex >= partnerList.children.length) {

    // Reached the last item or went beyond it
    // Remove the first item and append it to the bottom
    const firstItem = partnerList.children[0];
    partnerList.removeChild(firstItem);
    partnerList.appendChild(firstItem);

    // Reset partnerScrollIndex to 1 to start scrolling from the new first item
    partnerScrollIndex = 1;
  }
  var distance = partnerList.scrollWidth / partnerList.children.length;
  partnerList.scrollTop = distance * partnerScrollIndex;
  partnerScrollIndex++;
}

// Apply smooth scrolling transition
partnerList.style.transition = `scroll ${PartnerScrollDuration}ms ease-in-out`;

// Set an interval to scroll the items automatically
const partnerScrollInterval = setInterval(partnerScrollItems, 500); // Adjust the interval as needed (3 seconds in this example)

