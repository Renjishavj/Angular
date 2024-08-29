import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingDemoComponentComponent } from "./binding-demo-component/binding-demo-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingDemoComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BindingDemo';
}
