var btn = document.querySelector(".menu-btn");
var hidden = document.querySelector(".nav-bar-respo");
var exitBtn = document.querySelector(".exit-btn");
var darkMode = document.querySelector(".dark-mode");
var fontColor = document.querySelectorAll(".dark-white");
var body = document.querySelector("body");
var navBar = document.querySelector(".nav-bar");
var skillRound = document.querySelectorAll(".skill-round");
var navLink = document.querySelectorAll(".nav-link");
var socialLink = document.querySelectorAll(".social-links");

btn.addEventListener("click", ()=> {
   hidden.classList.add("active");
});
exitBtn.addEventListener("click", ()=> {
   hidden.classList.remove("active");
});

// dark mode

darkMode.addEventListener("click", ()=> {
   darkMode.classList.toggle("active2")

   if(darkMode.classList.contains("active2")){
     darkMode.innerHTML = '<i class="fa-regular fa-sun"></i>';
     darkMode.style.color = "white";
     body.style.backgroundColor = "#0D0D0D";
     navBar.style.backgroundColor = "#0D0D0D";
     navLink.forEach((e) =>{
         e.style.color = "white";
     });
     fontColor.forEach((e) =>{
         e.style.color = "white";
     });
     skillRound.forEach((e) =>{
         e.style.backgroundColor = "#0D0D0D";
     });
     socialLink.forEach((e) =>{
         e.style.backgroundColor = "#AE45FF";
         e.style.color = "#fff";
     });

   } else{
      darkMode.innerHTML = ' <i class="fa-solid fa-moon"></i>';
      darkMode.style.color = "gold";
      body.style.backgroundColor = "initial";
      navBar.style.backgroundColor = "#FFFFFF";
      navLink.forEach((e) =>{
         e.style.color = "initial";
     });
     fontColor.forEach((e) =>{
      e.style.color = "initial";
      });
      skillRound.forEach((e) =>{
         e.style.backgroundColor = "initial";
      });
      socialLink.forEach((e) =>{
         e.style.backgroundColor = "initial";
         e.style.color = "initial";
     });
   };

});


// scrool part

window.addEventListener("scroll", ()=>{
   var arrowBtn = document.querySelector(".down-arrow");
   if (window.scrollY > 100) {
       arrowBtn.style.display = "flex";
   }else{
       arrowBtn.style.display = "none";
   }
});

window.addEventListener("scroll", ()=>{
   var navBar = document.querySelector(".nav-bar");
   if (window.scrollY > 0) {
       navBar.style.boxShadow = "-10px 0px 20px grey";
   } else{
      navBar.style.boxShadow = "none";
   }
});

// type js

// type js
// var typed = new Typed(".auto-type", {
//    strings: ["I'm Kelvin Okeke.", "FrontEnd Developer.", "Backend Developer."],
//    typeSpeed: 150,
//    backSpeed: 150,
// });
var typed = new Typed(".auto-type", {
   strings: ["I'm Kodi Okeke.", "FrontEnd Developer.", "Backend Developer."],
   typeSpeed: 150,
   backSpeed: 150,
   loop: true, // Add this option for continuous looping
})

// var typed = (".auto-type", {
//    strings: ["I'm Kelvin Okeke.", "FrontEnd Developer.", "Backend Developer."],
//    typeSpeed: 150,
//    backSpeed: 150,
// });

// loader
var loader = document.querySelector("#preloader");

window.addEventListener("load", ()=> {
   loader.style.display = "none";
})