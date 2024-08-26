import { Component } from '@angular/core';
import { Todo, TodosService } from '../../services/todos.service';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[] = [];
  title = '';
  description = '';

  constructor(private todoService: TodosService) { }
 
  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }
  addTodo(): void {
    if (this.title && this.description) {
      this.todoService.addTodo(this.title, this.description);
      this.title = '';
      this.description = '';
      this.todos = this.todoService.getAllTodos();
    }
  }
 
   async updateTodo(id: number): Promise<void> {
    const newTitle = prompt('Enter new title');
    const newDescription = prompt('Enter new description');
    if (newTitle && newDescription) {
      this.todoService.updateTodo(id, newTitle, newDescription);
      this.todos = await this.todoService.getAllTodos();
    }
  }
 
  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getAllTodos();
  }
}
