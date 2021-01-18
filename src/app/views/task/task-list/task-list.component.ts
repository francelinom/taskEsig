import { Component, OnInit } from '@angular/core';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      tasks => this.tasks = tasks,
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteTask(task): void {
    const isDelete = confirm('Deseja Excluir ?');
    if (isDelete) {
      this.taskService.delete(task.id).subscribe(
        () => this.tasks = this.tasks.filter(element => element !== task),
        () => alert('Erro ao tentar excluir')
      );
    }
  }
}
