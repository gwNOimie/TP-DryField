import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../pages/home/home.component';
import { GameComponent } from '../../pages/game/game.component';
import { Page404Component } from '../../pages/page404/page404.component';
import { ScoresComponent } from '../../pages/scores/scores.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
