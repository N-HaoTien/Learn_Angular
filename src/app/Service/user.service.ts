import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient,public router: Router,) {}
  public httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json',}),
  };
  public isAuth = false ;
  public base_Url = 'https://localhost:7231';
  public CheckLogin(user : any,password:any): Observable<any>
  {
    const url = `${this.base_Url}/api/User/CheckLogin`+ '?user='+user+'&pass='+password ;
    return this.http.get<any>(url,this.httpOptions);
  }
  public ListUser(): Observable<any>{
    const url = `${this.base_Url}/api/User/GetListUser`;
    return this.http.get<any>(url,this.httpOptions);
  }
}
export class UserEntity{
  id: number | any;
  name: string | undefined;
  taikhoan: string | undefined;
  password: string | undefined;
  roles : [] | any;
  constructor(user:string,password:string) {
    this.taikhoan = user;
    this.password = password;
  }
}