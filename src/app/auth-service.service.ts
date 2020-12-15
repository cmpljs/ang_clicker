import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable()

export class AuthServiceService {

  private emitChangeSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }
}
