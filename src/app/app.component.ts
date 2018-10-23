import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string;
  count: number;
  name: string;
  tasks: Array<string>;

  constructor (){
    this.title = "NAGARRO";
    this.count = 0;
    this.name = "diksha";
    this.tasks = ['one','two','three','four'];
  }
  counter(){
    this.count++;
  }
}
