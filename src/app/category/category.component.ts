import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryEntity, CategoryTestApiService } from '../Service/category-test-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(public categoryService : CategoryTestApiService) { }
  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(res =>{
      this.listCategory = res;
      console.log("Get Category",this.listCategory);
    });
  }
  onSubmit(form:NgForm){
    this.categoryService.AddCategory().subscribe
    (res => {
      this.resetform(form);
    });
    this.categoryService.getCategory().subscribe(res =>{
      this.listCategory = res;
      console.log("Get Category",this.listCategory);
    });
  }
  resetform(form:NgForm){
    form.form.reset();
    this.categoryService.formData = new CategoryEntity();
  }
   public listCategory : CategoryEntity [] | any;


}
