(function() {
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

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/* Hr Animacija */
var animatedHrs = document.querySelectorAll(".animated-hr");
var animatedFlags = [];

function checkAnimation() {
  animatedHrs.forEach(function(hr, index) {
    if (isElementInViewport(hr) && !animatedFlags[index]) {
      hr.classList.add("animate");
      animatedFlags[index] = true;
    } else if (!isElementInViewport(hr) && animatedFlags[index]) {
      hr.classList.remove("animate");
      animatedFlags[index] = false;
    }
  });
}

document.addEventListener("scroll", checkAnimation);
window.addEventListener("resize", checkAnimation);


/* Footer Animacija */
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var animatedElements = document.querySelectorAll(".animated-element1");

function checkAnimation1() {
  animatedElements.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("show");
    } else {
      element.classList.remove("show");
    }
  });
}

document.addEventListener("scroll", checkAnimation1);

/* Typing text */
document.addEventListener("DOMContentLoaded", function() {
  var textElement = document.getElementById("typing-text");
  var text = textElement.innerHTML;
  textElement.innerHTML = ""; // Prazan sadržaj elementa

  function typeWriter(text, index) {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(function() {
        typeWriter(text, index);
      }, 70); // Promenite vrednost 100 da biste prilagodili brzinu kucanja
    }
  }

  typeWriter(text, 0);
});

/* Animacija Za Galeriju */
const galleryItems = document.querySelectorAll('.gallery-item');

function handleScroll() {
  galleryItems.forEach((item, index) => {
    const itemPosition = item.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (itemPosition - windowHeight <= 0) {
      setTimeout(() => {
        item.classList.add('show');
      }, index * 300); 
    }
  });
}

window.addEventListener('scroll', handleScroll);


})()