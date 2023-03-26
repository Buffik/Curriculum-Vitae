import './styles/scss/style.scss';

let viewport = document.querySelector('.slider__wrapper').offsetWidth;
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');
let slider = document.querySelector('.slider__view');
let viewSliders = document.querySelectorAll('.slider-navigation__item');
let viewSlide = 0;

viewSliders[0].style.backgroundColor = '#0074fd';

btnNext.addEventListener('click', function () {
  viewSliders[viewSlide].style.backgroundColor = '#7e7e7e';
  if (viewSlide < 4) {
    viewSlide++;
  } else {
    viewSlide = 0;
  }
  viewSliders[viewSlide].style.backgroundColor = '#0074fd';
  slider.style.left = -viewSlide * viewport + 'px';
});

btnPrev.addEventListener('click', function () {
  viewSliders[viewSlide].style.backgroundColor = '#7e7e7e';
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 4;
  }
  viewSliders[viewSlide].style.backgroundColor = '#0074fd';
  slider.style.left = -viewSlide * viewport + 'px';
});
