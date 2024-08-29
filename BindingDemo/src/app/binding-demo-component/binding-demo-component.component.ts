import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-binding-demo-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './binding-demo-component.component.html',
  styleUrl: './binding-demo-component.component.css'
})
export class BindingDemoComponentComponent {

  //interpolation
  title="angular demo"

   // Property Binding
   imageUrl = "../../assets/images/download.jpg";
   isImageVisible = true;

     // Event Binding
  buttonText = 'Click me';

  handleClick() {
    this.buttonText = 'Clicked!';
  }

  // Two-way Binding
  userName = '';


}
