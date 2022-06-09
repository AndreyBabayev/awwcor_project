import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-service',
  template:
    `
    id: {{cardId}}, 
     title: {{cardTitle}}, 
     description: {{cardDescription}},
     image: {{cardImg}}`

})
export class CardServiceComponent {
  @Input() cardId: number = 0;
  @Input() cardTitle: string = "";
  @Input() cardDescription: string = "";
  @Input() cardImg: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
