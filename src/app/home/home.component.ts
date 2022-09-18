import { AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PeopleComponent } from '../people/people.component';
import { PeopleEntity } from '../Service/proxies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inputFilter : PeopleEntity = new PeopleEntity();
  constructor() { }

  
  
  ngOnInit(): void {
    this.inputFilter = PeopleComponent.inputEntity;
    console.log('InputHomeComponent : ',this.inputFilter);
  }


}
