import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { ScoreComponent } from './modals/score/score.component';
import { ScoresComponent } from './pages/scores/scores.component';
import { ShopComponent } from './modals/shop/shop.component';
import { GameIntroComponent } from './modals/game-intro/game-intro.component';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';

import { RoutingModule } from './modules/routing/routing.module';

import { GameService } from './services/game/game.service';
import { BackendService } from './services/backend/backend.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameIntroComponent,
    ScoreComponent,
    ScoresComponent,
    ShopComponent,
    HomeComponent,
    Page404Component
  ],
  entryComponents: [
    GameIntroComponent,
    ScoreComponent,
    ShopComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [
    BackendService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
