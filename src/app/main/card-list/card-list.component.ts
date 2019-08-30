import {Component, OnInit} from '@angular/core';
import {Card} from '../../../shared/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[] = [];

  constructor() {
  }

  ngOnInit() {
    this.cards.push(
      new Card(
        'Умный Улей',
        'ваша пасека в вашем смартфоне',
        '/assets/images/ul_B1.png',
        '/assets/images/fonU.png',
        'https://yylei.by/'
      ),
      new Card(
        'signum',
        'aвтомобильная сигнализация нового поколения',
        '/assets/images/logo_signum_q-23.png',
        '/assets/images/fonS.png',
        'https://sgnm.by/'
      ),
      new Card(
        'aurora',
        'Система мониторинга автотранспорта',
        '/assets/images/AuroraLogo.png',
        '/assets/images/fonAu.png',
        'http://aurora-soft.by'
      )
    );
  }

  onCardClick(card: Card) {
    window.open(card.url, '_blank');
  }
}
