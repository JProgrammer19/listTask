import { Component, OnInit, DoCheck } from '@angular/core';
import { ListadoserviceService } from '../../service/listadoservice.service';
import { Task } from '../../model/task';

@Component({
  selector: 'verlistado',
  templateUrl: './verlistado.component.html',
  styleUrls: ['./verlistado.component.css'],
})
export class VerlistadoComponent implements OnInit, DoCheck {
  public tasks: Task[];

  constructor(public taskservice: ListadoserviceService) {}

  ngOnInit() {}

  ngDoCheck() {
    this.tasks = this.taskservice.getTasks();
  }

  delete(task: Task) {
    if (confirm('¿Estas seguro de que quieres eliminarlo?')) {
      this.taskservice.deleteTask(task);
    }
  }
}
