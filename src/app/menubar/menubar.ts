import { Component } from '@angular/core';
import {  RouterLink,  RouterLinkActive } from '@angular/router'; // Step 1
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  imports: [RouterLink,  RouterLinkActive], // Step 2
  templateUrl: './menubar.html',
  styleUrls: ['./menubar.css'],
})
export class Menubar {

  constructor( private _routerLink:Router  ) {}

  navigateToReactiveForm()
  {
   alert("Navigating to Reactive Driven Form");
   this._routerLink.navigate(['/rform']);
   // this._router.navigate(['/rform',100]);
   //this._router.navigateByUrl('/rform');
  }
  navigateToTemplateDrivenForm()
  {
       alert("Navigating to Template Driven Form");
       
      //this._routerLink.navigate(['/rform',100]);
      //this._routerLink.navigateByUrl('/rform');
      //this._routerLink.navigate(['/productdetails',5],{queryParams: { category: 'electronics', page: 1 } });
      this._routerLink.navigateByUrl('/productdetails/5?category=electronics&page=1');  



  }


}

