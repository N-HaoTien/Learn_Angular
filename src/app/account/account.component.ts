import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserEntity, UserService } from '../Service/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  constructor() { }
  public account : UserEntity | any;
  ngOnInit(): void {
    this.account = LoginComponent.account;
    console.log('Infor : ', this.account )
  }

}
