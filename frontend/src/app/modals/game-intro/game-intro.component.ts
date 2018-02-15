import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game-intro',
  templateUrl: './game-intro.component.html',
  styleUrls: ['./game-intro.component.scss']
})
export class GameIntroComponent {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  start() {
    this.activeModal.close();
  }
}
