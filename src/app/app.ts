import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Rooms } from './room/room';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Rooms],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mop');

  role = 'user';
}
