import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-manager-component',
  standalone: true,
  templateUrl: './task-manager-component.html',
  imports: [FormsModule],
})
export class TaskManagerComponent {
  tasks: { text: string; completed: boolean }[] = [];

  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push({ text: this.newTask, completed: false });
      console.log('Task added:', this.newTask);
      this.newTask = '';
    }
  }
  toggleCompleted(task: { text: string; completed: boolean }) {
    task.completed = !task.completed;
    console.log(
      `Task "${task.text}" marked as ${
        task.completed ? 'completed' : 'not completed'
      }`
    );
  }

  clearAllTasks() {
    this.tasks = [];
    console.log('All tasks cleared');
  }

  completed(): number {
    return this.tasks.filter((task) => task.completed).length;
  }

  pending(): number {
    return this.tasks.filter((task) => !task.completed).length;
  }
}
