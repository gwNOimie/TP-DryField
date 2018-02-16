import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(
    private http: HttpClient
  ) { }

  getScores() {
    return this.http.get('http://localhost:3000/scores').toPromise();
  }

  saveScore(score, name) {
    return this.http.post('http://localhost:3000/scores', { score, name }).toPromise();
  }
}
