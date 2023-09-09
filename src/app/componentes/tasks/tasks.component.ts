import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../task-service.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  public editando: boolean = false;
  constructor(public taskService:TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data)=>{
      this.taskService.tasks = data;
    });
  }

  ativarEdicao() {
    this.editando = true;
  }
}
