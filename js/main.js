const sliderImages = [
  'img/slider/slider01.jpg',
  'img/slider/slider02.jpeg',
  'img/slider/slider03.jpg',
  'img/slider/slider04.jpg',
  'img/slider/slider05.jpg',
  'img/slider/slider06.jpg',
  'img/slider/slider07.jpg',
  'img/slider/slider08.jpg',
  'img/slider/slider09.jpg',
  'img/slider/slider10.jpg',
  'img/slider/slider11.jpg',
  'img/slider/slider12.jpg',
]

const slideNumber = sliderImages.length;
let currentIndex = 0;


sliderImages.forEach((slide, index) => {

  const div = document.createElement('div');
  document.querySelector('.slide-lists__container').appendChild(div);

  if(index == currentIndex) {
    div.classList.add('current');
  }

  div.addEventListener('click', () => {
    const divs = document.querySelectorAll('.slide-lists__container div');
    divs[currentIndex].classList.remove('current');
    div.classList.add('current');
    currentIndex = index;
    document.querySelector('.slide-image img').src = sliderImages[currentIndex];
  });
});

const prev = document.querySelector('#prev');
prev.addEventListener('click', () => {
  let target = currentIndex - 1;
  if(target < 0) {
    target = slideNumber - 1;
  }
  document.querySelectorAll('.slide-lists__container div')[target].click();
});

const next = document.querySelector('#next');
next.addEventListener('click', () => {
  let target = currentIndex + 1;
  if(target == slideNumber) {
    target = 0;
  }
  document.querySelectorAll('.slide-lists__container div')[target].click();
});

// function slideShow () {
//   setTimeout(() => {
//     next.click();
//     slideShow();
//   }, 3000);
// }

// slideShow();




