import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Learn-Angular';
  constructor(public userService : UserService,public route : Router){
  }
  ngOnInit(): void {
    console.log('Check Auth : ',this.userService.isAuth);
    console.log('Infor Account : ',LoginComponent.account);
  }
  Logout() : void{
    this.userService.isAuth = false;
    this.route.navigate(['login']);
  }
}
