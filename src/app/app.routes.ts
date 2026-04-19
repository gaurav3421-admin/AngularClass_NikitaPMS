import { Routes } from '@angular/router';
import { StudentInformation } from '../app/student-information/student-information'; // Step 1
import { ReactiveDrivenForm } from '../app/reactive-driven-form/reactive-driven-form';
import { ProductDetails } from './product-details/product-details';
import { Menubar } from '../app/menubar/menubar';
import { AddProductDetails } from '../app/add-product-details/add-product-details';
import { DeleteproductDetails } from '../app/deleteproduct-details/deleteproduct-details';    
import { UpadteProductDetails } from '../app/upadte-product-details/upadte-product-details'; 
import { AGGrid } from '../app/aggrid/aggrid'
import { ErrorPage } from '../app/error-page/error-page';



export const routes: Routes = [

    { path: '', component: StudentInformation }, // default route
    { path: 'student-information', component: StudentInformation },
    { path: 'rform', component: ReactiveDrivenForm },
    { path: 'productdetails', component: ProductDetails },
    { path: 'addproductdetails', component: AddProductDetails },
    { path: 'productdetails/:id', title: 'Product Details', component: ProductDetails },
    { path: 'deleteproductdetails', component: DeleteproductDetails },
    { path: 'updateproductdetails', component: UpadteProductDetails },
    { path: 'aggrid', component: AGGrid },

    { path: '**', component: ErrorPage } // Wildcard route for 404 error page
];


