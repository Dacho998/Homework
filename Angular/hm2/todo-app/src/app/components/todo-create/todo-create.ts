import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-create.html',
  styleUrls: ['./todo-create.css'],
})
export class TodoCreate {
  title = signal('');
  description = signal('');

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (!this.title() || !this.description()) {
      alert('Both title and description are required!');
      return;
    }

    this.todoService.addTodo(this.title(), this.description());

    this.title.set('');
    this.description.set('');
  }
}
