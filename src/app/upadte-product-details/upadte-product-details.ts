import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductItem } from '../interfaces/product';
import { Commonservice } from '../projectservices/commonservice';


@Component({
  selector: 'app-upadte-product-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './upadte-product-details.html',
  styleUrl: './upadte-product-details.css',
})
export class UpadteProductDetails {

    searchText: string = '';
  //product: any = null;
  isLoading = false;
  errorMessage = '';
  isProductUpdated = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';

  // initialize product with empty values to avoid undefined in template
  product = {
    id: 0,
    title: '',
    description: '',
    category: '',
  };
  products: ProductItem[] = [];
  constructor(private commonService: Commonservice) { }


  SearchProduct(): void {
    this.commonService.searchProduct(this.searchText).subscribe(
      (productDetails: any) => {
        console.log("Product Data Received");
        this.products = productDetails.products[0] || productDetails; //  Array of Object (ProductItem) ProductItem[]
        this.product = this.products[0] || this.product; // Get the first product from the array or use the initialized product
        this.product.id = productDetails.products[0].id || 0; // Ensure id is a number
        this.product.title = productDetails.products[0].title || ''; // Ensure title is a string
        this.product.description = productDetails.products[0].description || ''; // Ensure description is a string
        this.product.category = productDetails.products[0].category || ''; // Ensure category is a string
        console.log(this.products);
      },
      (error) => {
        console.error("Error fetching product data:", error);


      });
  }

    updateProductDetails(updateProductForm: NgForm): void {

      if (updateProductForm.valid){
          console.log("Updating product with ID:", this.product.id);
            this.commonService.updateProductDetails(this.product.id, updateProductForm.value).subscribe(
              (updatedProduct) => {
                console.log("Product updated successfully:", updatedProduct);
                this.isProductUpdated = true;
                this.message = "Product updated successfully!. Product Title: " + updatedProduct?.title + " and ID: " + updatedProduct?.id;
                this.alertType = 'success';
              },
              (error) => {
                console.error("Error updating product:", error);
                this.isProductUpdated = true;
                this.message = "Error updating product.";
                this.alertType = 'error';
              }
            );

      }

  }

}
