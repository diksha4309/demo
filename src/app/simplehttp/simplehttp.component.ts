import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simplehttp',
  templateUrl: './simplehttp.component.html',
  styleUrls: ['./simplehttp.component.css']
})
export class SimplehttpComponent implements OnInit {
  data : Object;
  loading : boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest():void{
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    .subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }

}
