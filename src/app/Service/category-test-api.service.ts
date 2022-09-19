import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryTestApiService {

  constructor(private http : HttpClient) { }
  public httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json',}),
  };
  public formData : CategoryEntity = new CategoryEntity();
  public list : CategoryEntity [] |any;
  public base_Url = 'https://localhost:7231';
  public getCategory(): Observable<any>{
    const url = `${this.base_Url}/api/Category/GetAll`
    return this.http.get<any>(url,this.httpOptions);
  }
  public Refresh(){
    const url = `${this.base_Url}/api/Category`;
    this.http.get(url).toPromise()
              .then(res => this.list = res as CategoryEntity[]);
  }
  public AddCategory(){
    const url = `${this.base_Url}/api/Category/AddCategory`
    return this.http.post<any>(url,this.formData);
  }
}
export class CategoryEntity {
  name: number | undefined;
  description: string | undefined;
  image: string | undefined;
  constructor(data?:CategoryEntity) {
    if (data) {
      for (var property in data) {
          if (data.hasOwnProperty(property))
              (<any>this)[property] = (<any>data)[property];
      }
  }
  }
  
}