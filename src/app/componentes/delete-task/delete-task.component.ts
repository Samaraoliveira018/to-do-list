import {Component, Input} from '@angular/core';
import {TaskService} from "../../task-service.service";

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent {
  @Input() public task:any;
  constructor(private taskService:TaskService) {}

 public deleteTask(id: number){
    this.taskService.deleteTask(id).subscribe(()=>{
      this.taskService.tasks = this.taskService.tasks.filter((t)=> t.id !== id);
    });
  }
}
