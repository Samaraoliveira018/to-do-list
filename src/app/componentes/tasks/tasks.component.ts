import {Component, Input, OnInit} from '@angular/core';
import {TaskService} from "../../task-service.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit{
  constructor(public taskService:TaskService) {
    for (const task of this.taskService.tasks) {
      task['editing'] = false;
    }
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data)=>{
      this.taskService.tasks = data;
    });
  }

  editTask(taskId: any) {
    for (const task of this.taskService.tasks) {
      if (task.id === taskId) {
        task['editing'] = true;
      } else {
        task['editing'] = false;
      }
    }
  }

  saveEdition(task: any) {
    task['editing'] = false;
    this.taskService.updateTask(task).subscribe(()=>{
      task['editing'] = false;
    });
  }
}
