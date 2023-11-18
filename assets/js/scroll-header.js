window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const nav = document.querySelector('.nav-bot');
  
    if (window.scrollY > 50) {
      header.classList.add('fixed-header');
      nav.classList.add('hide-nav');
    } else {
      header.classList.remove('fixed-header');
      nav.classList.remove('hide-nav');
    }
  });
