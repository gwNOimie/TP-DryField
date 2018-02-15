import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  getScores() {
    return this.http.get('localhost:3000/scores').toPromise();
  }

  saveScore(score, name) {
    return this.http.post('localhost:3000/scores', { score, name }).toPromise();
  }
}
