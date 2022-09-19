import { Component, OnInit } from '@angular/core';
import { PeopleEntity, PeopleService } from '../Service/proxies.service';

@Component({
  selector: 'app-test-observables',
  templateUrl: './test-observables.component.html',
  styleUrls: ['./test-observables.component.css']
})
export class TestObservablesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
