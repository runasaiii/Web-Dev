import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'Buy flowers', description: 'Get roses 🌹', category: 'Personal', deadline: new Date() },
    { id: 2, title: 'Finish project', description: 'Complete the Angular task ✨', category: 'Work', deadline: new Date() }
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }
}
