import { Component } from '@angular/core';
import { LoginService } from './views/task/shared/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskEsig';

  showMenu = false;

  constructor(private loginService: LoginService){ }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.loginService.ShowMenu.subscribe(
      show => this.showMenu = show
    );
  }
}
