import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() task: string;
  @Output() modifyTask = new EventEmitter ();
  constructor() { }

  ngOnInit() {
    console.log(this.task);
  }

  modifyEvent(task){
    this.modifyTask.emit(`${task}Modification`)
  }

}
