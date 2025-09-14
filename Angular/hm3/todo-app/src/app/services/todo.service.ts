import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';

export type TodoStatus = 'pending' | 'in-progress' | 'done';

export interface Todo {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  status: TodoStatus;
}

const TODOS: Todo[] = [
  {
    id: '1',
    title: 'Buy groceries',
    description: 'Milk, bread, eggs, and vegetables',
    createdAt: new Date(),
    status: 'pending',
  },
  {
    id: '2',
    title: 'Morning workout',
    description: 'Go for a 30-minute run',
    createdAt: new Date(),
    status: 'pending',
  },
]

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos = new BehaviorSubject(TODOS);
  todos$ = this._todos.asObservable();

  
  addTodo(title: string, description: string) {
    const newTodo: Todo = {
      id: uuid(),
      title,
      description,
      createdAt: new Date(),
      status: 'pending',
    };

    this._todos.next([...this._todos.value, newTodo]);
  }

 
  updateStatus(id: string, status: TodoStatus) {
    const updated = this._todos.value.map((todo) =>
      todo.id === id ? { ...todo, status } : todo
    );
    this._todos.next(updated);
  }


  deleteTodo(id: string) {
    const filtered = this._todos.value.filter((todo) => todo.id !== id);
    this._todos.next(filtered);
  }


  readTodos() {
    return this._todos.asObservable();
  }


  getTodoById(id: string) {
    return this._todos.value.find((todo) => todo.id === id) || null;
  }
}
