import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
public onToggleSideNav = () => {
  this.sidenavToggle.emit();
}

}
// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find('.burger-menu_button', '.burger-menu_lines');
//   let links = menu.find('.burger-menu_link');
//   let overlay = menu.find('.burger-menu_overlay');

//   button.on('click', (e) => {
//     e.preventDefault();
//     toggleMenu();
//   });

//   links.on('click', () => toggleMenu());
//   overlay.on('click', () => toggleMenu());

//   function toggleMenu() {
//     menu.toggleClass('burger-menu_active');

//     if (menu.hasClass('burger-menu_active')) {
//       $('body').css('overflow', 'hidden');
//     } else {
//       $('body').css('overflow', 'visible');
//     }
//   }
// }
// burgerMenu('.burger-menu');