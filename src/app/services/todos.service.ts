import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  description: string;
}
 

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;
 
  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos;
  }
 
  getTodoById(id: number): Todo | undefined {
return this.todos.find(todo => todo.id === id);
  }
 
  addTodo(title: string, description: string): void {
    this.todos.push({ id: this.idCounter++, title, description });
  }
 
  updateTodo(id: number, title: string, description: string): void {
    const todo = this.getTodoById(id);
    if (todo) {
      todo.title = title;
      todo.description = description;
    }
  }
 
  deleteTodo(id: number): void {
this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
