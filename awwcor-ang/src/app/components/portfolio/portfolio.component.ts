import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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