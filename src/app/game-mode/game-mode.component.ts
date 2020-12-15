import { Component, OnInit } from '@angular/core';
import { ModeService } from '../mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-mode',
  templateUrl: './game-mode.component.html',
  styleUrls: ['./game-mode.component.scss']
})
export class GameModeComponent implements OnInit {

  constructor(private _modeService: ModeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  choosenGameMode:string = '5';

  submitModeForm() {
    this._modeService.emitChange(this.choosenGameMode);
    this._modeService.setMode(this.choosenGameMode);
    console.log(this._modeService.getMode());

    this.router.navigate(['play']);
  }

}
