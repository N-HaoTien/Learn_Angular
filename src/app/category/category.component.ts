import { Component, OnInit } from '@angular/core';
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
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = data;
      console.log("Get this.listCategory",this.listCategory);

      console.log("Get Category",data);
    });
    console.log("Get Category2",this.categoryService.list);
  }
  onSubmit(form:NgForm){
    this.categoryService.AddCategory().subscribe
    (res => {
      this.resetform(form);
      this.categoryService.Refresh();
    })
  }
  resetform(form:NgForm){
    form.form.reset();
    this.categoryService.formData = new CategoryEntity();
  }
   public listCategory : CategoryEntity [] | any;


}
