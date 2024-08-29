import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: string[] = ['Data 1', 'Data 2', 'Data 3'];

  constructor() {}

  getData() {
    return this.data;
  }

  addData(newData: string) {
    this.data.push(newData);
  }
}
