import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  icon: string;
  @Input()
  description: string;
  @Input()
  fon: string;
  @Input()
  link: number;


  constructor() { }

  ngOnInit() {
  }

}
