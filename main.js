const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

  /* Selector Function */

  const select=(el, all=false) => {
    el=el.trim()
    if(all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}


/* Preloader */

let preloader=select('#preloader');
if(preloader) {
window.addEventListener('load', () => {
    preloader.remove();
});
}

const observer=new IntersectionObserver((entries)=>{
entries.forEach((entry)=> {
  console.log(entry)
  if(entry.isIntersecting) {
    entry.target.classList.add('show');
  } else {
    entry.target.classList.remove('show')
  }
});
});

document.addEventListener("scroll", function() {
  var element = document.getElementById("about");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    element.classList.add("animate__fadeInLeftBig");
    element.style.opacity = "1";
    element.style.visibility = "visible";
  }
});

document.addEventListener("scroll", function() {
  var element = document.getElementById("contact");
  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    element.classList.add("animate__fadeInLeftBig");
    element.style.opacity = "1";
    element.style.visibility = "visible";
  }
});


document.addEventListener("scroll", function() {
  var element = document.getElementById("p1");

  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    element.classList.add("animate__flipInX");
  }
});

document.addEventListener("scroll", function() {
  var element = document.getElementById("p2");

  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    element.classList.add("animate__flipInX");
  }
});

document.addEventListener("scroll", function() {
  var element = document.getElementById("p3");

  var position = element.getBoundingClientRect();

  if (position.top < window.innerHeight) {
    element.classList.add("animate__flipInX");
  }
});

document.addEventListener("scroll", function() {
  var element = document.getElementById("h12");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (position.top < windowHeight) {
    element.style.opacity = 1;
  }
});

document.addEventListener("scroll", function() {
  var element = document.getElementById("footer");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (position.top < windowHeight) {
    element.style.opacity = 1;
  }
});