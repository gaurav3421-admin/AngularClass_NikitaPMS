import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  _employeeForm: boolean = true;
 //_productStatus:string = 'Available'; //
 //_productStatus:string = 'OutOfStock'; //
 _productStatus:string = 'sdfsdfsf'; //
 _isGreenClass:boolean=false;
 _fontSize:string='60px';
 //_isGreenClass:boolean=false;
  // Array of Object
  _productList = [
    { Id: 101, Name: "Laptop", Price: 45000 },
    { Id: 102, Name: "Mobile", Price: 25000 },
    { Id: 103, Name: "Tablet",   Price: 15000 },
    { Id: 104, Name: "Desktop", Price: 55000 }
  ]

  showForm(): void {
    //alert("showForm");
    this._employeeForm = true;

  }
  hideForm(): void {
    //alert("showForm");
    this._employeeForm = false;

  }

  

}
