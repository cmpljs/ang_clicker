import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class ModeService {

  private emitChangeSource = new Subject<any>();

  mode: string = '5';

  getMode() {
    return this.mode;
  }

  setMode(value: string) {
    this.mode = value;
  }

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: string) {
    this.emitChangeSource.next(change);
  }
}
