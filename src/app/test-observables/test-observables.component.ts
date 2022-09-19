import { Component, OnInit } from '@angular/core';
import { PeopleEntity, PeopleService } from '../Service/proxies.service';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.css']
})
export class TestObservablesComponent implements OnInit {
  public Person : PeopleEntity = 
    {
      peoplE_ID : 1, peoplE_TEN: "30" , peoplE_HIGHT : "1m80",peoplE_AGE : "21",peoplE_DIACHI : "",ghichu:"",creatE_DT: ""
    };
  constructor(private peopleService : PeopleService) { }

  ngOnInit(): void {
  }

}
