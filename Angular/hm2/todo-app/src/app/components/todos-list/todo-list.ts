import { Component, signal, computed } from '@angular/core';
import { TodoService, Todo } from '../../services/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-todos-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-list.html',
  styleUrls: ['./todo-list.css'],
})
export class TodosList {
  todos = signal<Todo[]>([]);
  search = signal('');
  filteredTodos = computed(() => this.todos().filter((todo) => todo.title.includes(this.search())));
  constructor(private todoService: TodoService) {
    this.todoService.todos$.subscribe((todos) => this.todos.set(todos));
  }
  updateStatus(id: string, status: Todo['status']) {
    this.todoService.updateStatus(id, status);
  }
  deleteTodo(id: string) {
    this.todoService.deleteTodo(id);
  }
}
