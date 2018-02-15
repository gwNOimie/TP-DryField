import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { GameService } from './../../services/game/game.service';

import { GameIntroComponent } from './../../modals/game-intro/game-intro.component';
import { ShopComponent } from '../../modals/shop/shop.component';
import { ScoreComponent } from '../../modals/score/score.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService.gameIsOver.subscribe(gameIsOver => {
      if (gameIsOver) {
        const modalRef = this.modalService.open(ScoreComponent, { size: 'lg' });
        modalRef.result.then(() => {
          this.gameService.endGame();
        }).catch((error) => {
          this.gameService.endGame();
          console.log('openModalScore', error);
        });
      }
    });
  }

  showGameIntro() {
    this.gameService.initGame();
    const modalRef = this.modalService.open(GameIntroComponent, { size: 'lg' });
    modalRef.result.then(() => {
      this.gameService.playGame();
    }).catch((error) => {
      console.log('openModalGameIntro', error);
    });
  }

  openShop() {
    this.gameService.pauseGame();
    const modalRef = this.modalService.open(ShopComponent, { size: 'lg' });
    modalRef.result.then((result) => {
      this.gameService.buyWater(result);
      this.gameService.playGame();
    }).catch((error) => {
      console.log('openModalShop', error);
      this.gameService.playGame();
    });
  }

  addWater(index) {
    this.gameService.refillFieldWater(index);
  }

  harvest(index) {
    this.gameService.harvestField(index);
  }

  get cash() {
    return this.gameService.cash;
  }

  get playing() {
    return this.gameService.playing;
  }

  get playTime() {
    return this.gameService.playTime;
  }

  get fields() {
    return this.gameService.fields;
  }

  get globalWater() {
    return this.gameService.globalWater;
  }

  get harvestTime() {
    return this.gameService.harvestTime;
  }

  get waterPrice() {
    return this.gameService.waterPrice;
  }
}
