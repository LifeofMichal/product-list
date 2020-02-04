import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  category: Category
  constructor(private categoryService: CategoryService) {
    this.categories = [];
    this.category = null;
  }

  getCategories(): void {
    this.categoryService.getCategory()
        .subscribe(categories => {
          if(categories){
            categories.forEach(element => {
              this.category = element;
              this.category.subCategory = element['subCategories'];
            });
          }
          this.categories = categories;});
  }

  ngOnInit() {
    this.getCategories();
  }

}
