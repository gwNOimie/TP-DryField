import { HttpClientModule } from '@angular/common/http';
import { BackendService } from './../../services/backend/backend.service';
import { GameService } from './../../services/game/game.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreComponent } from './score.component';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('ScoreComponent', () => {
  let component: ScoreComponent;
  let fixture: ComponentFixture<ScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScoreComponent
      ],
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        HttpClientModule
      ],
      providers: [
        NgbActiveModal,
        GameService,
        BackendService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
