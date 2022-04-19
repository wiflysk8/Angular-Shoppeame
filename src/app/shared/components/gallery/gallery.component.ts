import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() products: any;
  public filteredProducts: any;
  public searchValue: string = '';
  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: any) {
    if (changes.products) {
      this.filteredProducts = this.products;
      console.log(this.products)
    }
    }

  search() {
    this.products = this.searchValue == "" ? this.filteredProducts = this.products :this.products.filter((product: any)=>
    product.name.toLowerCase().includes(this.searchValue.toLowerCase()))
    /* console.log(this.products); */

  }
}

