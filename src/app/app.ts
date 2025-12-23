import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from '../app/login/login'; // step 1: import Login component
import { Datatypes } from '../app/datatypes/datatypes';
import { Databinding } from '../app/databinding/databinding'
import { Directives} from '../app/directives/directives';
import { Pipes} from '../app/pipes/pipes';
import { StudentInformation } from './student-information/student-information'; 
import { ReactiveDrivenForm} from '../app/reactive-driven-form/reactive-driven-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  
    //Datatypes,
    //Databinding 
    //Directives
    //Pipes,
    //StudentInformation
    ReactiveDrivenForm
  
  ], // step 2: add Login to imports array
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NikitaPMS');
}
