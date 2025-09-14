import { Routes } from '@angular/router';
import { TodosList } from './components/todos-list/todo-list';
import { TodoCreate } from './components/todo-create/todo-create';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosList },
  { path: 'create', component: TodoCreate },
];
