import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { ModeService } from './mode.service';

@Component({
  selector: 'app-root',
  providers: [AuthServiceService, ModeService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _authService: AuthServiceService) {
    _authService.changeEmitted$.subscribe(
      name => {
        this.currentPlayerName = name;
        this.players.push({name, record: 0});
      }
    )
  }

  title = 'ClickerApp';
  players:Array<{}> = [];
  currentPlayerName:string = '';
  currentGameMode:string = '5;'

}
