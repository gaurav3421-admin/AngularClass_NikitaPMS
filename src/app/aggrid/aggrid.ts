import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';


import { AgGridAngular,AgGridModule } from 'ag-grid-angular'; // STEP 1 Angular Data Grid Component
import type { ColDef } from 'ag-grid-community'; // STEP 1 Column Definition Type Interface
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';  // STEP 1 Angular Data Grid Component
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);  // STEP 1 Angular Data Grid Component

@Component({
  selector: 'app-aggrid',
  imports: [AgGridAngular,AgGridModule,CommonModule], // STEP 2 - Import AgGridAngular and AgGridModule
  templateUrl: './aggrid.html',
  styleUrl: './aggrid.css',
})
export class AGGrid {


  isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== 'undefined';
  }

  // STEP 3 - Define the Row Data and Column Definitions
  // Row Data: The data to be displayed.
    rowData = [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false }
    ];

    // Column Definitions: Defines the columns to be displayed.
    colDefs: ColDef[] = [
        { field: "make" ,filter: true },
        { field: "model", filter: true },
        { field: "price", filter: true },
        { field: "electric", filter: true }
    ];
}
