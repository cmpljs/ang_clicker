import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { GameModeComponent } from './game-mode/game-mode.component';
import { GamePlayComponent } from './game-play/game-play.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    GameModeComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
