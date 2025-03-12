document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  let currentSlide = 0;
  const slideCount = document.querySelectorAll(".carousel-item").length;
  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-primary", index === currentSlide);
      dot.classList.toggle("bg-gray-300", index !== currentSlide);
    });
  }
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  }
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      updateCarousel();
    });
  });
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  setInterval(nextSlide, 5000);
  updateCarousel();
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  function updateActiveLink() {
    const currentPos = window.scrollY;
    sections.forEach((section, index) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (currentPos >= top && currentPos < bottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  }
  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("show");
  });
});
