import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';
import { ClicksServiceService } from '../clicks--service.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  constructor(private _modeService: ModeService,
              private _clicksService: ClicksServiceService) {}

  ngOnInit(): void {
    this.secondsLeft =  +this._modeService.getMode();
  }

  secondsLeft:number = 5;
  btnMsg:string = 'Click to start';
  gameInProgress:boolean = false;
  clicks:number = 0;

  finishGame() {
    this.btnMsg = `You have clicked ${this.clicks} ${this.clicks > 1 ? 'times' : 'time'}!`;
    this.clicks = 0;
    this.gameInProgress = false;
  }

  playGame() {
    this.secondsLeft =  +this._modeService.getMode();
    this.btnMsg = `${this.secondsLeft} seconds left!`;
    this.gameInProgress = true;

    let timer = setInterval(() => {
      this.secondsLeft--;
      this.btnMsg = `${this.secondsLeft} seconds left!`;

      if (this.secondsLeft <= 0) {
        clearInterval(timer);
        this._clicksService.emitChange(this.clicks);
        this.finishGame();
      }
    }, 1000)
  }

  countClicks() {
    this.clicks++;
  }

}
