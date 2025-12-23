import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Step 1: import ReactiveFormsModule
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor

@Component({
  selector: 'app-reactive-driven-form',
  imports: [ReactiveFormsModule, CommonModule], // Step 2: add ReactiveFormsModule to imports array
  templateUrl: './reactive-driven-form.html',
  styleUrl: './reactive-driven-form.css',
})
export class ReactiveDrivenForm {

  studentForm!: FormGroup;
  private formBuilder = inject(FormBuilder);

  constructor(private fb: FormBuilder) { } // Step 3: inject FormBuilder

  ngOnInit() {
    this.studentForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100)])

    })

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
