import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryService } from './category.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdListComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent, ProdListComponent]
})
export class AppModule { }
