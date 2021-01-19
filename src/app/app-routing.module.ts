import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskFormComponent } from './views/task/task-form/task-form.component';
import { TaskHomeComponent } from './views/task/task-home/task-home.component';
import { TaskListComponent } from './views/task/task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskHomeComponent
  },
  {
    path: 'taskForm/list',
    component: TaskListComponent
  },
  {
    path: 'taskForm/new',
    component: TaskFormComponent
  },
  {
    path: 'taskForm/edit/:id',
    component: TaskFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
