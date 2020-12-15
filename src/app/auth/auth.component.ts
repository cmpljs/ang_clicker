import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private _authService: AuthServiceService,
              private router: Router) {}

  ngOnInit(): void {
  }

  playerName:string = '';

  onNameFormSubmit(value: string) {
    this._authService.emitChange(value);
    this.router.navigate(['mode']);
  }


}
