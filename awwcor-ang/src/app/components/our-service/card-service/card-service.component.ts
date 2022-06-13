import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/interfaces.models';

@Component({
  selector: 'app-card-service',
  templateUrl: './card-service.component.html',
  styleUrls: ['./card-service.component.css']

})
export class CardServiceComponent implements OnInit{
  @Input() card?: Card;


  constructor() { }

  ngOnInit(): void {
    console.log (this.card);
    
  }

}
