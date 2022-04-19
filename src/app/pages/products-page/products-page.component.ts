import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  products: any;

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: any)=>{
      this.products = res;

    })
  }

}
