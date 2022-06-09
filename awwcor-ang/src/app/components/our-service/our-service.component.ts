import { Component, OnInit, Input } from '@angular/core';

interface Cards {
  id: number,
  title: string,
  description: string,
  image: string,
}

@Component({
  selector: 'app-our-service',
  template:
    `<app-card-service
   [cardId]="id" 
   [cardTitle]="title" 
   [cardDescription]="description" 
   [cardImg]="image">
   </app-card-service>`
})
export class OurServiceComponent implements OnInit {
  cards: Cards[] =
    [
      {
        id: 0,
        title: 'Custom Design',
        description: ' Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum. Duis mollis, non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
        image: '/assets/images/icon/services-item-1.png'
      },
      {
        id: 1,
        title: 'Inovate Ideas',
        description: 'Curabitur vestibulum eget mauris quis laoreet. Phasellus in quam laoreet, viverra lacus ut, ultrices velit.',
        image: '/assets/images/icon/services-item-2.png'
      },
      {
        id: 2,
        title: 'Love Is The Answer',
        description: 'Quisque luctus, quam eget molestie commodo, lacus purus cursus purus, nec rutrum tellus dolor id lorem.',
        image: '/assets/images/icon/services-item-3.png'
      },
      {
        id: 3,
        title: 'Responsive Layout',
        description: 'Nulla sed nunc et tortor luctus faucibus. Morbi at aliquet turpis, et consequat felis. Quisque condimentum.',
        image: '/assets/images/icon/services-item-4.png'
      },
      {
        id: 4, title: '24 / 7 Support',
        description: 'Sed porttitor placerat rhoncus. In at nunc tellus. Maecenas blandit nunc ligula. Praesent elit leo.',
        image: '/assets/images/icon/services-item-5.png'
      },
      {
        id: 5,
        title: 'Feel Like A Star',
        description: 'Vivamus vel quam lacinia, tincidunt dui non, vehicula nisi. Nulla a sem erat. Pellentesque egestas venenatislorem .',
        image: '/assets/images/icon/services-item-6.png'
      }
    ]


  constructor() { }

  ngOnInit(): void {

  }

}
