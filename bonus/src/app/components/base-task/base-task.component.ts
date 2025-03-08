import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-base-task',
  standalone:true,
  imports:[RouterModule],
  templateUrl: './base-task.component.html',
  styleUrls: ['./base-task.component.css']
})
export class BaseTaskComponent {
  title: string = '';
  description: string = '';
  category: string = '';
  status: 'Pending' | 'Completed' = 'Pending';
  deadline: Date | null = null;
}
