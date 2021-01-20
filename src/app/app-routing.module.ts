import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './views/task/shared/guard/auth-guard';
import { TaskFormComponent } from './views/task/task-form/task-form.component';
import { TaskHomeComponent } from './views/task/task-home/task-home.component';
import { TaskListComponent } from './views/task/task-list/task-list.component';
import { TaskLoginComponent } from './views/task/task-login/task-login.component';

const routes: Routes = [
  {
    path: '',
    component: TaskHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'taskForm/list',
    component: TaskListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'taskForm/new',
    component: TaskFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'taskForm/edit/:id',
    component: TaskFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: TaskLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
