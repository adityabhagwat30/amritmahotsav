const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      document.getElementById('nav-box').style.opacity = '1';
      document.getElementById('nav-box').style.transform = 'translateY(0)'; 
      document.getElementById('carousel-control-next').style.display = 'none';
      document.getElementById('carousel-control-prev').style.display = 'none';
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      document.getElementById('nav-box').style.opacity = '0';
      document.getElementById('nav-box').style.transform = 'translateY(-100%)'; 
      document.getElementById('carousel-control-next').style.display = '';
      document.getElementById('carousel-control-prev').style.display = '';
   }
});