import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { PeopleEntity } from '../Service/proxies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public inputFilter : PeopleEntity = new PeopleEntity(); 
  public static inputEntity: PeopleEntity= new PeopleEntity();
  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(){
    PeopleComponent.inputEntity = this.inputFilter;
    console.log('Input : ', this.inputFilter);
    console.log('Input Địa Chỉ : ', this.inputFilter.peoplE_DIACHI);
  }
}
