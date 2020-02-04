import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }
  
  getProducts(): void {
    this.productService.getProduct()
        .subscribe(products => this.products = products);
  }

  ngOnInit() {
    this.getProducts();
  }

}
