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
  public districtsnew :string[] = [];
  public Person = [
    {
      Name : "Văn Quyết", Age: 30 , Height : "1m80",TransferVal : 1000000000
    },
    {
      Name : "Công Phượng", Age: 27, Height : "1m78",TransferVal : 3000000000
    },
    {
      Name : "Nhâm Mạnh Dũng", Age: 21, Height : "1m80",TransferVal : 5000000000
    },
  ]
  public cities = 
  [
    {Province : "Select Province" , districts : ["Select City"]},
    {
      Province : "Khánh Hòa" , districts : ["Thành phố Nha Trang","Thị xã Cam Ranh","Thị xã Ninh Hòa",
      "Huyện Cam Lâm","Huyện Diên Khánh","Huyện Khánh Sơn"
      ,"Huyện Khánh Vĩnh","Huyện Trường Sa","Huyện Vạn Ninh"]
    },
    {
      Province : "Bà Rịa - Vũng Tàu" , districts : ["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ",
      "Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ",
      "Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]
    }
]
ngOnChanges(_changes: any): void {
  console.log('ngOnChanges', _changes.target.value);
  this.check = !this.check;
  console.log('ngOnChanges', this.check);

  var districtsdata = this.cities.filter(data => data.Province === _changes.target.value);
  console.log('data districts',districtsdata);
  if(districtsdata && districtsdata.length > 0){
    this.districtsnew = districtsdata[0].districts;
  }
}
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
  check = false;

  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  
}
