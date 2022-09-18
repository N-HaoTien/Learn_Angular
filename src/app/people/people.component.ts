import { Component, OnInit } from '@angular/core';
import { PeopleEntity } from '../Service/proxies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  inputFilter : PeopleEntity = new PeopleEntity(); 
  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(){
    console.log('Input : ', this.inputFilter);
    console.log('Input : ', this.inputFilter.peoplE_DIACHI);

  }
}
