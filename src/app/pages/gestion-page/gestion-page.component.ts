import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';
@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss'],
})
export class GestionPageComponent implements OnInit {
  gestionForm!: any;
  public submitted: boolean = false;
  public newProduct: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService
  ) {
    this.gestionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.maxLength(40)]],
      stars: [''],
      image: [''],
    });
  }

  ngOnInit(): void {
    this.gestionForm.valueChanges.subscribe((changes: any) => { this.newProduct = changes; })
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.gestionForm.valid) {
      this.newProduct = {
        name: this.gestionForm.get('name').value,
        price: this.gestionForm.get('price').value,
        description: this.gestionForm.get('description').value,
        stars: this.gestionForm.get('stars').value,
        image: this.gestionForm.get('image').value,
      };
      console.log(this.newProduct);
      this.productService.postProduct(this.newProduct).subscribe();
      this.submitted = false;
    }
  }
}
