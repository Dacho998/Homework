import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [Navigation, RouterOutlet],
  templateUrl: './app.html',
})
export class App {
    title = 'Todo App';
}
