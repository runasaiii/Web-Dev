import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-item',
  imports:[RouterModule],
  standalone:true,
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Input() declare title: string;
  @Input() declare description: string;
  @Input() declare category: string;
  @Input() declare status: 'Pending' | 'Completed';
  @Input() declare deadline: Date;
  
  @Input() taskId!: number;
  @Output() taskCompleted = new EventEmitter<number>();

  markAsCompleted() {
    if (this.status !== 'Completed') {
        this.status = 'Completed';
        this.taskCompleted.emit(this.taskId);
    }
}

}
