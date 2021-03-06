import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameIntroComponent } from './game-intro.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('GameIntroComponent', () => {
  let component: GameIntroComponent;
  let fixture: ComponentFixture<GameIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameIntroComponent
      ],
      providers: [
        NgbActiveModal
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
