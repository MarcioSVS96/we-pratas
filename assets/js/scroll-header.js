window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const nav = document.querySelector('.nav-bot');
    const menu = document.querySelector('.secretMenu')
    const contact = this.document.querySelector('.start')
    
    
  
    if (window.scrollY > 50) {
      header.classList.add('fixed-header');
      nav.classList.add('hide-nav');
      contact.style.display="none";
      menu.style.display="block";
      
      
    } else {
      header.classList.remove('fixed-header');
      nav.classList.remove('hide-nav');
      menu.style.display="none";
      contact.style.display="block";
      
    }
  });

