import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for common directives
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms

@Component({
  selector: 'app-student-information',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-information.html',
  styleUrl: './student-information.css',
})
export class StudentInformation {

  // Data model for two-way binding
  // student Object to hold form data
  studentData = {
    fullName: '',
    age: null as number | null,
    gender: ''
  };
  genders = ['Male', 'Female', 'Other'];


  
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
