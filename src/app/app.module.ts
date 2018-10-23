import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { SimplehttpComponent } from './simplehttp/simplehttp.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SimplehttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
