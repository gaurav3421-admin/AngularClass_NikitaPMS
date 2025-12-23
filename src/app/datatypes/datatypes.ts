import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // directives like ngIf, ngFor etc


@Component({
  selector: 'app-datatypes',
  imports: [CommonModule],
  templateUrl: './datatypes.html',
  styleUrl: './datatypes.css',
})
export class Datatypes {

  _studentName:string ="Enter student name";
  _studentAge:any=22;
  _isEnrolled:boolean=true;
  _largeNumber: bigint = 9007199254740991n;

  _isdisabled: boolean = false;


  // Object
 student = {
    id: 1,
    name: "Gaurav Kumar",
    age: 22,
    course: "Angular"
  };

  

  //Array
  students: string[] = ["Gaurav", "Amit", "Rohan", "Sita"];
  marks: number[] = [85, 90, 78, 92];



  //Array of Objects
  products = [
    { id: 1, name: "Keyboard", price: 500 },
    { id: 2, name: "Mouse", price: 300 },
    { id: 3, name: "Monitor", price: 5000 }
  ];

  // Tuple
  //Basic Tuple
 user: [number, string,string] = [101, "Gaurav","Choudhary"];



  //Tuple with Different DataTypes
  employee: [number, string, boolean] = [1, "Nitin", true];
  //Array of Tuples
  studentstuple: [number, string][] = [
    [1, "Amit"],
    [2, "Sita"],
    [3, "Rohan"]
  ];


  sumbitStudentInformtion():void{
    alert("this is my event binsding example");  

  }


}
