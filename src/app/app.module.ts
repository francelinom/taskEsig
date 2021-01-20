import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './views/task/task-list/task-list.component';
import { TaskFormComponent } from './views/task/task-form/task-form.component';
import { TaskHomeComponent } from './views/task/task-home/task-home.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {CalendarModule} from 'primeng/calendar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TaskConcludedDirective } from './views/task/shared/task-concluded.directive';
import { TaskLoginComponent } from './views/task/task-login/task-login.component';
import { LoginService } from './views/task/shared/login.service';
import { AuthGuard } from './views/task/shared/guard/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskHomeComponent,
    TaskConcludedDirective,
    TaskLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    Ng2SearchPipeModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
