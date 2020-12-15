import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  constructor(private _modeService: ModeService) {
      _modeService.changeEmitted$.subscribe(
      mode => {
        this.secondsLeft = +mode;
        console.log('GAMEPLAY COMPONENT KNOWS')
      });
   }

  ngOnInit(): void {
    this.secondsLeft =  +this._modeService.getMode();
  }

  secondsLeft:number = 5;

}
