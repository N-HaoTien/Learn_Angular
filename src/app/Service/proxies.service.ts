import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PeopleEntity {
  peoplE_ID: number | undefined;
  peoplE_TEN: string | undefined;
  peoplE_HIGHT: string | undefined;
  peoplE_AGE: string | undefined;
  peoplE_DIACHI: string | undefined;
  ghichu: string | undefined;
  creatE_DT: Date | undefined;
  constructor(data?:PeopleEntity) {
    if (data) {
      for (var property in data) {
          if (data.hasOwnProperty(property))
              (<any>this)[property] = (<any>data)[property];
      }
    }
  }
  
}
export class PeopleService {
  private urlApi = "https:localhost:44372/api/people/"
  
  constructor() { }
}
