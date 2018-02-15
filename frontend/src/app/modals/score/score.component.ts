import { Component, OnInit, OnDestroy } from '@angular/core';

import { BackendService } from './../../services/backend/backend.service';
import { GameService } from './../../services/game/game.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit, OnDestroy {
  name: string;
  scoreSubscription: Subscription;
  score: number;

  constructor(
    public activeModal: NgbActiveModal,
    private gameService: GameService,
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.scoreSubscription = this.gameService.score.subscribe(score => {
      this.score = score;
    });
  }

  ngOnDestroy() {
    this.scoreSubscription.unsubscribe();
  }

  saveScore() {
    this.backendService.saveScore(this.score, this.name)
      .catch(error => {
        console.log(error);
      });
    this.activeModal.close();
  }

  cancel() {
    this.activeModal.dismiss('cancel');
  }
}
