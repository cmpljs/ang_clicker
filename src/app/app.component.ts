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
        this.records.unshift([name, 0]);
      });

      _clicksService.changeEmitted$.subscribe(
      (clicks:number) => {

        this.finishMsg = `${this.isRecord(clicks) ? 'Nice, a new record!' : 'You can do better!'}`;
        setTimeout(() => {
          this.finishMsg = '';
        }, 3500);

        if (this.isRecord(clicks)) {
          this.records[0][1] = clicks;
        }

      });

    
  }

  isRecord(clicks: number): boolean {
    let foundRecord = false;

    this.records.forEach(i => {
      if (i[1] < clicks) {
        foundRecord = true;
      }
    });

    return foundRecord;
  }

  title = 'ClickerApp';
  records:[string, number][] = [];
  currentPlayerName:string = '';
  currentGameMode:string = '5';
  finishMsg:string = '';

}
