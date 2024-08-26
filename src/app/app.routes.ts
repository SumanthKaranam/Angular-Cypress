import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';

 

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home Page
  { path: 'todos', component: TodosComponent }, // Todo App Page
  { path: 'login', component: LoginComponent }, // Login Page
  
];


