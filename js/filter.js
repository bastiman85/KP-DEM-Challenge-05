var navAll = document.querySelector(".nav__link.all");
var navBeginner = document.querySelector(".nav__link.beginner");
var navIntermediate = document.querySelector(".nav__link.intermediate");
var navExpert = document.querySelector(".nav__link.expert");
var navGrandmother = document.querySelector(".nav__link.grandmother");

var courseBeginner = document.querySelectorAll(".course.beginner");
var courseIntermediate = document.querySelectorAll(".course.intermediate");
var courseExpert = document.querySelectorAll(".course.expert");
var courseGrandmother = document.querySelectorAll(".course.grandmother");

var tabs = document.querySelector(".nav__list");
var navItems = tabs.querySelectorAll(".nav__list-item");

var courses = document.getElementById("courses");
var courseItems = courses.querySelectorAll(".course");

for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      document.getElementById("nav").scrollIntoView({
         behavior: "smooth",
      });

      // Removes active class from every navItem
      if (current.length > 0) {
         current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";

      // console.log(current[0].firstElementChild);
      if (current[0].firstElementChild.classList.contains("all")) {
         for (var j = 0; j < courseItems.length; j++) {
            if (!courseItems[j].classList.contains("nocourses")) {
               courseItems[j].classList.remove("hide");
               courseItems[j].classList.add("show");
            } else {
               courseItems[j].classList.remove("show");
               courseItems[j].classList.add("hide");
            }
         }
      }

      if (current[0].firstElementChild.classList.contains("beginner")) {
         for (var j = 0; j < courseItems.length; j++) {
            if (courseItems[j].classList.contains("beginner")) {
               courseItems[j].classList.remove("hide");
               courseItems[j].classList.add("show");
            } else {
               courseItems[j].classList.remove("show");
               courseItems[j].classList.add("hide");
            }
         }
      }

      if (current[0].firstElementChild.classList.contains("intermediate")) {
         for (var j = 0; j < courseItems.length; j++) {
            if (courseItems[j].classList.contains("intermediate")) {
               courseItems[j].classList.remove("hide");
               courseItems[j].classList.add("show");
            } else {
               courseItems[j].classList.remove("show");
               courseItems[j].classList.add("hide");
            }
         }
      }
      if (current[0].firstElementChild.classList.contains("expert")) {
         for (var j = 0; j < courseItems.length; j++) {
            if (courseItems[j].classList.contains("expert")) {
               courseItems[j].classList.remove("hide");
               courseItems[j].classList.add("show");
            } else {
               courseItems[j].classList.remove("show");
               courseItems[j].classList.add("hide");
            }
         }
      }
      if (current[0].firstElementChild.classList.contains("grandmother")) {
         for (var j = 0; j < courseItems.length; j++) {
            if (courseItems[j].classList.contains("grandmother")) {
               courseItems[j].classList.remove("hide");
               courseItems[j].classList.add("show");
            } else {
               courseItems[j].classList.remove("show");
               courseItems[j].classList.add("hide");
            }
         }
      }
   });
}
