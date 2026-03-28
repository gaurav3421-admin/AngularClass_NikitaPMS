import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Step 1: import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { Commonservice } from '../projectservices/commonservice';
import {ProductItem} from '../interfaces/product';

@Component({
  selector: 'app-reactive-driven-form',
  imports: [ReactiveFormsModule, CommonModule], // Step 2: add ReactiveFormsModule to imports array
  templateUrl: './reactive-driven-form.html',
  styleUrl: './reactive-driven-form.css',
})
export class ReactiveDrivenForm {

  studentForm!: FormGroup;
  private formBuilder = inject(FormBuilder);
  private commonService = inject(Commonservice);
  stateList: any[] = [];
  products: ProductItem[] = [];

  constructor(private fb: FormBuilder) { } // Step 3: inject FormBuilder

  ngOnInit() {
    this.studentForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)]),
      state: new FormControl('', [Validators.required])

    })


    this.commonService.getStateList().subscribe(
      (stateList: any[]) => {
        console.log("State List:", stateList);
        this.stateList = stateList
      },
      (error: any) => {
        console.error("Error fetching state list:", error);
      }

    )
    this.getAllProducts();
  }

  getAllProducts(): void {

    this.commonService.getAllProducts().subscribe(
      (data: any) => {
        console.log("Product Data Received");
        
        this.products=data.products || data;
        console.log(this.products);
      },
      (error) => {
        console.error("Error fetching product data:", error);


      });
  }



  InsertStudentInformation() {
    try {
      if (this.studentForm.valid) {
        alert("this is student information submitted successfully");
        alert("Name:" + this.studentForm.value.fullName + " Age:" + this.studentForm.value.age);
        console.log("Student Information Submitted:", this.studentForm.value);

      }
    }
    catch (error) {
      console.error("Error submitting student information:", error);
    }


  }

}
