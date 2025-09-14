import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create.html',
  styleUrls: ['./todo-create.css'],
})
export class TodoCreate {
  todoForm = new FormGroup(
    {
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      status: new FormControl('pending', Validators.required),
    },
    { updateOn: 'change' }
  );

  constructor(private todoService: TodoService, private router: Router) {}

  onSubmit() {
    if (this.todoForm.invalid) return;

    const { title, description, status } = this.todoForm.value;
    this.todoService.addTodo(title!, description!);

    this.todoForm.reset({ status: 'pending' });
    this.router.navigate(['/todos']);
  }

  hasError(controlName: string, errorName: string) {
    const control = this.todoForm.get(controlName);
    return control?.hasError(errorName) && control.touched;
  }
}
