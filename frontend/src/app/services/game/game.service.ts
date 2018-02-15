import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FieldModel } from './../../models/field.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScoreComponent } from '../../modals/score/score.component';

@Injectable()
export class GameService {
  private _gameIsOver: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _playing: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _playTime: BehaviorSubject<number> = new BehaviorSubject(null);
  private gameInterval: any;
  private initialConsumption = 1;
  private _waterPrice = 1;
  private harvestPrice = 40;
  private _harvestTime = 20;
  private consumption: number;
  private _fields: BehaviorSubject<FieldModel[]> = new BehaviorSubject(null);
  private _globalWater: BehaviorSubject<number> = new BehaviorSubject(null);
  private _cash: BehaviorSubject<number> = new BehaviorSubject(null);
  private _score: BehaviorSubject<number> = new BehaviorSubject(null);

  get playing() {
    return this._playing.asObservable();
  }

  get gameIsOver() {
    return this._gameIsOver.asObservable();
  }

  get fields() {
    return this._fields.asObservable();
  }

  get globalWater() {
    return this._globalWater.asObservable();
  }

  get cash() {
    return this._cash.asObservable();
  }

  get score() {
    return this._score.asObservable();
  }

  get playTime() {
    return this._playTime.asObservable();
  }

  get waterPrice() {
    return this._waterPrice;
  }

  get harvestTime() {
    return this._harvestTime;
  }

  constructor() { }

  initGame() {
    if (this._gameIsOver.getValue()) {
      this._gameIsOver.next(false);
    }
    this._score.next(0);
    this._playTime.next(0);
    this._cash.next(50);
    this._globalWater.next(3);
    const fields = [];
    fields.push(new FieldModel());
    fields.push(new FieldModel());
    fields.push(new FieldModel());
    this._fields.next(fields);
    this.consumption = this.initialConsumption;
  }

  playGame() {
    if (!this._playing.getValue()) {
      this._playing.next(true);
    }
    this.gameInterval = setInterval(() => {
      const fields = this._fields.getValue();
      fields.forEach(field => {
        if (field.isAlive && field.age < this.harvestTime) {
          this.fieldDrink(field);
          field.age += 1;
        }
      });
      if (fields.filter(field => field.isAlive).length === 0) {
        this.gameOver();
      }
      this._fields.next(fields);
      this._playTime.next(this._playTime.getValue() + 1);
      this.consumption += 1 / 900;
    }, 1000);
  }

  pauseGame() {
    clearInterval(this.gameInterval);
  }

  endGame() {
    this._gameIsOver.next(false);
    this._playing.next(false);
  }

  fieldDrink(field: FieldModel) {
    if (field.isAlive && field.water > this.consumption) {
      field.water -= this.consumption;
    } else {
      field.water = 0;
      field.isAlive = false;
    }
  }

  gameOver() {
    console.log('game over');
    clearInterval(this.gameInterval);
    this._gameIsOver.next(true);
  }

  unOverGame() {
    this._gameIsOver.next(false);
  }

  refillFieldWater(index) {
    const fields = this._fields.getValue();
    fields[index].water += 1;
    if (!fields[index].isAlive) {
      fields[index].age = 0;
    }
    fields[index].isAlive = true;
    this._globalWater.next(this._globalWater.getValue() - 1);
    this._fields.next(fields);
  }

  harvestField(index) {
    const fields = this._fields.getValue();
    this._cash.next(this._cash.getValue() + this.harvestPrice);
    this._score.next(this._score.getValue() + 1);
    fields[index].age = 0;
    this._fields.next(fields);
  }

  buyWater(qtt) {
    this._cash.next(this._cash.getValue() - (qtt * this.waterPrice));
    this._globalWater.next(this._globalWater.getValue() + qtt);
  }

}
