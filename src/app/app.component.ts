import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { ModeService } from './mode.service';
import { ClicksServiceService } from './clicks--service.service';

@Component({
  selector: 'app-root',
  providers: [AuthServiceService, ModeService, ClicksServiceService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _authService: AuthServiceService,
              private _clicksService: ClicksServiceService) {

    _authService.changeEmitted$.subscribe(
      name => {
        this.currentPlayerName = name;
        this.records.push([name, 0]);
      });

      _clicksService.changeEmitted$.subscribe(
      (clicks:number) => {
        this.records[this.findCurrentPlayer()][1] = clicks;
      });

    
  }

  findCurrentPlayer(): any {
    this.records.forEach((item, index) => {
      console.log('item 0: ' + item[0], 'name:' + this.currentPlayerName);

      if (item[0] === this.currentPlayerName) {
        return index;
      }

      return -1;
    })
  }

  title = 'ClickerApp';
  records:[string, number][] = [];
  currentPlayerName:string = '';
  currentGameMode:string = '5;'

}
