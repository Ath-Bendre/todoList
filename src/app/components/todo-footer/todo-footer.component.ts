import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  @Input() todos: Todo[] = [];
  constructor() {


  }

  ngOnInit(): void {
  }
  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }
}



