import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './componentes/board/board.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { TasksComponent } from './componentes/tasks/tasks.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AddTaskComponent } from './componentes/add-task/add-task.component';
import { DeleteTaskComponent } from './componentes/delete-task/delete-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { IconeSvgComponent } from './componentes/icone-svg/icone-svg.component';
import { EditTaskComponent } from './componentes/edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TasksComponent,
    HeaderComponent,
    AddTaskComponent,
    DeleteTaskComponent,
    IconeSvgComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
