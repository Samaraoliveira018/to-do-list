import { Component } from '@angular/core';
import {TaskService} from "../../task-service.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  public newTask = {
    id: 0,
    nome: ''
  };
  constructor(private taskService:TaskService) {}
  addTask(){
    if(this.newTask.nome === ''){
      return;
    }
    this.taskService.addTask(this.newTask).subscribe((data)=>{
      this.taskService.tasks.push(data);
    });
  }
}
