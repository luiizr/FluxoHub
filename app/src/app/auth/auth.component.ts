import { Component } from '@angular/core';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  authMode: AuthMode = 'login';

  setAuthMode(mode: AuthMode): void {
    this.authMode = mode;
  }
}
