import {Component, Input} from '@angular/core';
import {TaskService} from "../../task-service.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  @Input() public task:any;

  public editando: boolean = true;
  public novaDescricao: string = '';
  constructor(private taskService:TaskService) {}

  ativarEdicao(): void {
    this.editando = true;
    this.novaDescricao = this.task.nome; // Inicializa o campo de edição com a descrição atual da tarefa
  }

  salvarEdicao(): void {
    // Atualiza a descrição da tarefa com a nova descrição
    this.task.nome = this.novaDescricao;

    // Chama o serviço para atualizar a tarefa no servidor ou armazenamento local
    this.taskService.atualizarTarefa(this.task);

    // Desativa a edição
    this.editando = false;
  }


}
