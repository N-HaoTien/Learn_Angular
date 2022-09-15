import { Component, OnInit,OnChanges,OnDestroy,AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,AfterViewInit,OnChanges,OnDestroy {

  constructor() { }
  public Name : string | undefined;
  public Name2 : string | undefined;

  public Person = [
    {
      Name : "Văn Quyết", Age: 30 , Height : "1m80",TransferVal : 1000000000
    },
    {
      Name : "Công Phượng", Age: 27, Height : "1m78",TransferVal : 3000000000
    },
    {
      Name : "Nhâm Mạnh Dũng", Age: 21, Height : "1m8",TransferVal : 5000000000
    },
  ]
  ngOnDestroy(): void {
    console.log('ngOnDestroy')

  }
  resetName(){
    this.Name ='';
  }
  onKeyDown(){
    this.Name ='';
  }
  onClick(input:any){
    this.Name = input;
  }getName2(input :any){
    this.Name2 = input;
  }
  getName(input :any){
    this.Name = input;
  }
  ngOnChanges(_changes: SimpleChanges): void {
    console.log('ngOnChanges')
  }

  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  
}
