import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[] = [];


  constructor() { }

  ngOnInit(): void {



  }
  deleteTodo(id:number):void{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  atLeastOne (): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

}
