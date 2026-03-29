import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductItem } from '../interfaces/product';
import { Commonservice } from '../projectservices/commonservice';

@Component({
  selector: 'app-add-product-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product-details.html',
  styleUrl: './add-product-details.css',
})
export class AddProductDetails {

  isProductAdded = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';

  product = {
    title: '',
    description: '',
    category: '',

  };
  constructor(private commonService: Commonservice) { }


  addProductDetails(productForm: NgForm): void {

    if (productForm.valid) {
      const productData: ProductItem = {
        id: 0,
        title: productForm.value.title,
        category: productForm.value.category,
        description: productForm.value.description,
      };

      this.commonService.addProductDetails(productData).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          this.isProductAdded = true;
          this.alertType= 'success';
          this.message = "Success!:-Product details have been added successfully. Product ID: " + response.id + "and product Title: " + response.title;
          //productForm.reset();
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
    }

  }



}
