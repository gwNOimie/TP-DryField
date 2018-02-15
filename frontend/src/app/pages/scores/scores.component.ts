import { Component, OnInit } from '@angular/core';

import { BackendService } from './../../services/backend/backend.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  orderedScores: any[];
  constructor(
    private backendService: BackendService
  ) { }

  ngOnInit() {
    this.backendService.getScores().then(scores => {
      this.orderedScores = (<any[]>scores).sort(this.sort);
    }).catch(error => console.log(error));
  }

  private sort(a, b) {
    return b.score - a.score;
  }
}
