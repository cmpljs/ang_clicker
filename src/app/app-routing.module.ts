import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { GameModeComponent } from './game-mode/game-mode.component';
import { GamePlayComponent } from './game-play/game-play.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'mode',
    component: GameModeComponent
  },
  {
    path: 'play',
    component: GamePlayComponent
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
