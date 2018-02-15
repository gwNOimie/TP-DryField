import { GameService } from './../../services/game/game.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  cart: number;

  constructor(
    public activeModal: NgbActiveModal,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.initialCash.subscribe(cash => {
      this.cart = cash;
    });
  }

  addWaterToCart() {
    this.cart += 1;
  }

  removeWaterFromCart() {
    this.cart -= 1;
  }

  validate() {
    this.activeModal.close(this.cart);
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }

  get initialCash() {
    return this.gameService.cash;
  }

  get initialGlobalWater() {
    return this.gameService.globalWater;
  }
}
