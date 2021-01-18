import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

import { switchMap } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, AfterContentChecked {

  tasks: Task[] = [];

  currentAction: string;
  taskForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm = false;
  task: Task = new Task();

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildTaskForm();
    this.loadTask();
    this.taskService.getAll().subscribe(
      tasks => this.tasks = tasks,
      error => alert('Erro ao carregar a lista')
    );
  }

  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  // tslint:disable-next-line:typedef
  submitForm() {
    this.submittingForm = true;

    if (this.currentAction === 'new') {
      this.createTask();
    }else{
      this.updateTaks();
    }
  }

  // tslint:disable-next-line:typedef
  private setCurrentAction() {
    if (this.route.snapshot.url[1].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  // tslint:disable-next-line:typedef
  private buildTaskForm() {
    this.taskForm = this.formBuilder.group({
      id: [null],
      title: [null, [Validators.required, Validators.minLength(4)]],
      description: [null, [Validators.required, Validators.minLength(4)]],
      responsible: [null],
      priority: [null],
      date: [null]
    });
  }

  // tslint:disable-next-line:typedef
  private loadTask() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.taskService.getById(+params.get('id')))
      )
      .subscribe(
        (task) => {
          this.task = task;
          this.taskForm.patchValue(task);
        },
        (error) => alert('Ocorreu um erro!')
      );
    }
  }

  // tslint:disable-next-line:typedef
  private setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastro de Nova Tarefa';
    } else {
      const taskName = this.task.title || '';
      this.pageTitle = 'Editando Tarefa: ' + taskName;
    }
  }

  // tslint:disable-next-line:typedef
  private createTask() {
    const task: Task = Object.assign(new Task(), this.taskForm.value);

    this.taskService.create(task)
      .subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        task => this.actionsFormSuccess(task),
        error => this.actionsForError(error)
      );
  }

  // tslint:disable-next-line:typedef
  private updateTaks() {
    const task: Task = Object.assign(new Task(), this.taskForm.value);
    this.taskService.update(task)
      .subscribe(
        // tslint:disable-next-line:no-shadowed-variable
        task => this.actionsFormSuccess(task),
        error => this.actionsForError(error)
      );
  }

  // tslint:disable-next-line:typedef
  private actionsFormSuccess(task: Task) {
    this.toastr.success('Solicitação realizada com sucesso!');
    this.router.navigateByUrl('taskForm/list', {skipLocationChange: true}).then(
      () => this.router.navigate(['taskForm/list', 'edit', task.id])
    );
  }

  // tslint:disable-next-line:typedef
  private actionsForError(error) {
    this.toastr.error('Ocorreu um erro ao realizar a sua solicitação');

    this.submittingForm = false;
  }
}
