import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../task-login/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userAuth = false;

  ShowMenu = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  fazerLogin(user: User): void {
    if (user.email === 'user@gmail.com' && user.password === '123456') {
      this.userAuth = true;
      this.ShowMenu.emit(true);
      this.router.navigate(['/']);
    } else {
      this.userAuth = false;
      this.ShowMenu.emit(false);
    }
  }

  // tslint:disable-next-line:typedef
  userIsAuth() {
    return this.userAuth;
  }
}
