import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  id: any;
  title: any;
  description: any;
  responsible: any;
  situation: any;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(
      tasks => this.tasks = tasks,
      error => alert('Erro ao carregar a lista')
    );
  }

  // tslint:disable-next-line:typedef
  search() {
    if (this.title === '' ) {
      this.ngOnInit();
    } else {
      this.tasks = this.tasks.filter( res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
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

  changeStatus(task: Task): void {
    if (confirm('Deseja Concluir Tarefa ' + task.title + ' ?')) {
      this.taskService.statusTaks(task.id);
      this.taskService.getAll().subscribe(
        tasks => this.tasks = tasks
      );
    }
  }

}
