import { Component, OnInit } from '@angular/core';
import {Todo} from '../../interfaces/todo';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  public todos: Todo[] = [];
  todoTitle!: string;
  idForTodo!: number;
  constructor() {

  }

  ngOnInit(): void {

    this.todoTitle = '';
    this.idForTodo = 1;
  }

addTodo(): void{
  if (this.todoTitle.trim().length === 0) {
    return;
  }
  this.todos = this.todos.filter(todo => todo.id && todo.completed==false);
  this.todos.push({
    id:this.idForTodo,
    title: this.todoTitle,
    completed:false
  })
  this.todoTitle = '';
  this.idForTodo++;
}
}
