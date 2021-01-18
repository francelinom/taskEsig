import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from './views/task/task-form/task-form.component';
import { TaskListComponent } from './views/task/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent
  },
  {
    path: 'taskForm/new',
    component: TaskFormComponent
  },
  {
    path: 'taskForm/edit/:id',
    component: TaskFormComponent
  },
  {
    path: 'taskForm/list',
    component: TaskListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
