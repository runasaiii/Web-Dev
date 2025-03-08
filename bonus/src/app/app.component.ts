import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskListComponent } from "./components/task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'bonus';
}
