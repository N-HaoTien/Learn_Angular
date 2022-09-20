import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { UserEntity, UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public static account: UserEntity | any;
  constructor(public accountService: UserService,public route : Router) { }
  onSubmit(signForm: NgForm) {
    console.log('Check', signForm.value.taikhoan);

    this.accountService.CheckLogin(signForm.value.taikhoan, signForm.value.password).subscribe(res => {
      if (res === false) {
        console.log('Bạn đã đăng nhập sai')
        console.log('Check IsAuth', this.accountService.isAuth);
        
      }
      else {
        LoginComponent.account = res;
        this.accountService.isAuth = true;
        console.log('Check IsAuth', this.accountService.isAuth);
        this.route.navigate(['account']);
      }
    });
  }
  ngOnInit(): void {
  }

}
