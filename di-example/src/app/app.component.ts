import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';  // Import the service

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dependency Injection Example';
  data: string[] = [];

  constructor(private dataService: DataService) {  // Inject the service
    this.data = this.dataService.getData();  // Use the service
  }

  addNewData(newData: string) {
    this.dataService.addData(newData);
  }
}
