import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { User } from './user';

@Component({
  selector: 'app-task-login',
  templateUrl: './task-login.component.html',
  styleUrls: ['./task-login.component.css']
})
export class TaskLoginComponent implements OnInit {

  user: User = new User();
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  Fazerlogin(): void{
    console.log(this.user);
    this.loginService.fazerLogin(this.user);
  }

}
