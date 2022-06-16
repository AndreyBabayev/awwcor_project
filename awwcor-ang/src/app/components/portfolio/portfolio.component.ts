import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/models/interfaces.models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio: Portfolio[] =

  [{
    id:0,
    group: 'pic-portfolio webdesign',
    image: '../../../assets/images/image_portfolio/portfolio-1.png',
  },
  {
  id:1,
  group: 'pic-portfolio webdesign',
  image: '../../../assets/images/image_portfolio/portfolio-2.png',
},
{ id:2,
  group: 'pic-portfolio webdesign',
  image: '../../../assets/images/image_portfolio/portfolio-3.png',
},
{ id:3,
  group: 'pic-portfolio graphicdesign',
  image: '../../../assets/images/image_portfolio/portfolio-4.png',
},
{ id:4,
  group: 'pic-portfolio graphicdesign',
  image: '../../../assets/images/image_portfolio/portfolio-5.png',
},
{ id:5,
  group: 'pic-portfolio graphicdesign',
  image: '../../../assets/images/image_portfolio/portfolio-6.png',
},
{ id:6,
  group: 'pic-portfolio artwork',
  image: '../../../assets/images/image_portfolio/portfolio-7.png',
},
{ id:7,
  group: 'pic-portfolio artwork',
  image: '../../../assets/images/image_portfolio/portfolio-8.png',
},
{ id:8,
  group: 'pic-portfolio artwork',
  image: '../../../assets/images/image_portfolio/portfolio-9.png',
},
{ id:9,
  group: 'pic-portfolio webdesign',
  image: '../../../assets/images/image_portfolio/portfolio-10.png',
},
{ id:10,
  group: 'pic-portfolio graphicdesign',
  image: '../../../assets/images/image_portfolio/portfolio-11.png',
},
{ id:11,
  group: 'pic-portfolio artwork',
  image: '../../../assets/images/image_portfolio/portfolio-12.png',
},
  ]

  constructor() { }

  ngOnInit(): void {
    console.log (this.portfolio);
  }
}

// window.onclick = function (event) {
//   let modal = document.querySelector('.modal');
//   let span = document.getElementsByClassName('close');
//   let bigImage = document.querySelector('.modal-content');
//   console.log(modal);

//   if (event.target.className === 'test1') {
//     console.log(event.target.src);
//     modal.style.display = 'block';
//     bigImage.setAttribute('src', event.target.src);
//     console.log(event.target.className === 'test1');
//   }
//   if (event.target.className === 'close') {cd 
//     modal.style.display = 'none';
//   }
//   if (event.target === modal) {
//     modal.style.display = 'none';
//   }
//   let filterList = document.getElementById('filter-list');
//   let btns = filterList.getElementsByClassName('btn');

//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function () {
//       let current = document.getElementsByClassName('active-button');
//       current[0].className = current[0].className.replace(' active-button', '');
//       this.className += ' active-button';
//     });
//   }
// };
// function filterSelection(c) {
//   let x, i;
//   x = document.getElementsByClassName('pic-portfolio');
//   if (c == 'all') c = '';
//   for (i = 0; i < x.length; i++) {
//     imgRemoveClass(x[i], 'show');
//     if (x[i].className.indexOf(c) > -1) imgAddClass(x[i], 'show');
//   }
// }
// function imgAddClass(element, name) {
//   let i, arr1, arr2;
//   arr1 = element.className.split(' ');
//   arr2 = name.split(' ');
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += ' ' + arr2[i];
//     }
//   }
// }
// function imgRemoveClass(element, name) {
//   let i, arr1, arr2;
//   arr1 = element.className.split(' ');
//   arr2 = name.split(' ');
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(' ');
// }

// document.addEventListener('DOMContentLoaded', function () {
//   let modal = document.querySelector('myImg');
//   let img = new bootstrap.Modal(document.querySelector('img01'));
//   img.onclick.addEventListener('click', function () {
//     modal.show();
//   });
// });
