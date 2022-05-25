window.onload = function () {
  showSlides(slideIndex);
  filterSelection('all');
};
window.onclick = function (event) {
  let modal = document.querySelector('.modal');
  let span = document.getElementsByClassName('close');
  let bigImage = document.querySelector('.modal-content');
  console.log(modal);

  if (event.target.className === 'test1') {
    console.log(event.target.src);
    modal.style.display = 'block';
    bigImage.setAttribute('src', event.target.src);
    console.log(event.target.className === 'test1');
  }
  if (event.target.className === 'close') {
    modal.style.display = 'none';
  }
  if (event.target === modal) {
    modal.style.display = 'none';
  }
  let filterList = document.getElementById('filter-list');
  let btns = filterList.getElementsByClassName('btn');

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
      let current = document.getElementsByClassName('active-button');
      current[0].className = current[0].className.replace(' active-button', '');
      this.className += ' active-button';
    });
  }
};

let slideIndex = 1;

function plusSlide() {
  showSlides((slideIndex += 1));
}
function minusSlide() {
  showSlides((slideIndex -= 1));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('item');
  let dots = document.getElementsByClassName('slider-dots_item');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName('pic-portfolio');
  if (c == 'all') c = '';
  for (i = 0; i < x.length; i++) {
    imgRemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) imgAddClass(x[i], 'show');
  }
}
function imgAddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}
function imgRemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}
document.addEventListener('DOMContentLoaded', function () {
  let modal = document.querySelector('myImg');
  let img = new bootstrap.Modal(document.querySelector('img01'));
  img.onclick.addEventListener('click', function () {
    modal.show();
  });
});

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}
burgerMenu('.burger-menu');
