import { Component ,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for common directives
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { Commonservice } from '../projectservices/commonservice'; // Step 1- 

@Component({
  selector: 'app-student-information',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-information.html',
  styleUrl: './student-information.css',
})
export class StudentInformation implements OnInit  {

  // Data model for two-way binding
  // student Object to hold form data
  studentData = {
    fullName: '',
    age: null as number | null,
    gender: '',
    country: ''

  };
  genders = ['Male', 'Female', 'Other'];
  countries:any[]= [];


  constructor( private _commonService: Commonservice ){}; // Injecting Commonservice Step 2

  ngOnInit(): void {
  console.log('Initializing Student Information Component');
    // Step 3 -Using the injected service to get country list
    this._commonService.getCountryList().subscribe(
     ( result:any )=>
     {
       this.countries=result;
       console.log('Country List:', this.countries);
     }

    )
      
  }

  // Method to handle form submission
  onSubmitStudentInformation(form: NgForm) {
    //if (form.valid) {
      console.log('Student Information Submitted:', this.studentData);
      // You can add further processing logic here, such as sending data to a server
    //} else {
      //console.log('Form is invalid');
    //}
  }


}
