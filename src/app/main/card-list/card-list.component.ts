import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  title1 = 'Умный Улей';
  icon1 = '/assets/images/ul_B1.png';
  description1 = 'ваша пасека в вашем смартфоне';
  fon1 = '/assets/images/fonU.png';
  link1 = 'https://www.onliner.by/';

  title2 = 'signum';
  icon2 = '/assets/images/logo_signum_q-23.png';
  description2 = 'aвтомобильная сигнализация нового поколения';
  fon2 = '/assets/images/fonS.png';

  title3 = 'aurora';
  icon3 = '/assets/images/Aurora120.png';
  description3 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ';
  fon3 = '/assets/images/fonA.png';



  constructor() {
  }

  ngOnInit() {
  }

}
