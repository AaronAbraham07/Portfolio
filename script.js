/* ====================================
   HERO FADE-IN ANIMATION
==================================== */
const heroText = document.querySelector(".hero-text");
if (heroText) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }, 300);
  });
}

/* ====================================
   TYPEWRITER EFFECT
==================================== */
const heroHeading = document.querySelector(".hero-text h2");
if (heroHeading) {
  const text = heroHeading.textContent;
  heroHeading.textContent = "";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      heroHeading.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }
  window.addEventListener("load", typeWriter);
}

/* ====================================
   SMOOTH SCROLL NAVIGATION
==================================== */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ====================================
   SCROLL-DOWN ARROW
==================================== */
const heroSection = document.querySelector(".hero");
if (heroSection) {
  const scrollDown = document.createElement("div");
  scrollDown.classList.add("scroll-down");
  scrollDown.innerHTML = "&#x2193;"; // down arrow symbol
  heroSection.appendChild(scrollDown);

  scrollDown.addEventListener("click", () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth"
    });
  });
}
/* ====================================
   SKILLS BAR ANIMATION (Staggered)
==================================== */
const skillBars = document.querySelectorAll(".fill");
if (skillBars.length > 0) {
  function showSkills() {
    let delay = 0; // delay between bars
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !bar.classList.contains("reveal")) {
        setTimeout(() => {
          bar.classList.add("reveal");
        }, delay);
        delay += 200; // 0.2s delay between each bar filling
      }
    });
  }

  window.addEventListener("scroll", showSkills);
  window.addEventListener("load", showSkills);
}
/* ====================================
   PORTFOLIO CAROUSEL
==================================== */
const carouselTrack = document.querySelector('.carousel-track');
if (carouselTrack) {
  const slides = Array.from(carouselTrack.children);
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  let currentIndex = 0;

  function moveToSlide(index) {
    carouselTrack.style.transform = 'translateX(-' + index * 100 + '%)';
  }

  // Next button
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  });

  // Prev button
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
  });

  // Auto-slide every 4 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
  }, 4000);

  // Optional: update on window resize for responsiveness
  window.addEventListener("resize", () => moveToSlide(currentIndex));
}

/* ====================================
   CONTACT FORM SUBMISSION
==================================== */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon.");
    this.reset();
  });
}

/* ====================================
   FADE-IN ELEMENTS ON SCROLL
==================================== */
const fadeInItems = document.querySelectorAll(".gallery-item, .contact-form, .contact-info");
if (fadeInItems.length > 0) {
  // Initialize opacity and position
  fadeInItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  function revealItems() {
    fadeInItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", revealItems);
  window.addEventListener("load", revealItems);
}