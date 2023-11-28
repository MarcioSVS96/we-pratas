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






  function secretMenu( btn, a ){
    btn.setAttribute( "onclick", `secretMenu( this, ${ a ? 0 : 1 } )` );
    document.querySelector(".secretMenu").classList.add( a ? "show" : "hide" );
    document.querySelector(".secretMenu").classList.remove( a ? "hide" : "show" );
  }
  !function(){
    secretMenu( document.querySelector(".btn.section"), 0);
  }()