const bannerContainer = document.querySelector(".banner-container");
  let currentIndex = 0;

  function showBanner() {
    const bannerWidth = document.querySelector(".banner-item").clientWidth;
    bannerContainer.style.transform = `translateX(${-currentIndex * bannerWidth}px)`;
  }

  function autoPlay() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % 2; // Duas imagens
      document.getElementById(`radio${currentIndex + 1}`).checked = true;
      showBanner();
    }, 10000);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + 2) % 2; // Duas imagens
    showBanner();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % 2; // Duas imagens
    showBanner();
  }

  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  autoPlay();