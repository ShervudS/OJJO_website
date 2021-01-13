'use strict'
const bgMenu = document.querySelector('.burger__menu'),
      bgLine = bgMenu.querySelector('.burger__menu--line');

bgMenu.addEventListener('click', () => {
   bgLine.classList.toggle('activ'); 
});