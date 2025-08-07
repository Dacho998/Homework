import { Component } from '@angular/core';
import { TaskManagerComponent } from './../components/task-manager-component/task-manager-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [TaskManagerComponent],
})
export class App {}
