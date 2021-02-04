'use strict'
const bgMenu = document.querySelector('.burger__menu'),
      bgLine = bgMenu.querySelector('.burger__menu--line'),
      catalogBtnShowCards = document.querySelector('.catalog__show-more'),
      catalogCards = document.querySelector('.catalog__cards.hidden');

bgMenu.addEventListener('click', () => {
   bgLine.classList.toggle('activ'); 
});

catalogBtnShowCards.addEventListener('click', () => {
   catalogCards.classList.remove('hidden');
   catalogBtnShowCards.classList.add('hidden');
});

// const ahref = document.querySelectorAll('a');

// ahref.forEach(e => {
//    e.addEventListener('click', (e) =>{
//       e.preventDefault();
//    });
// });