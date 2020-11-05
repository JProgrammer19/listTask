import { Component, OnInit } from '@angular/core';
import { ListadoserviceService } from '../../service/listadoservice.service';
import { Task } from '../../model/task';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public task: Task;

  constructor(public taskservice: ListadoserviceService) {}

  ngOnInit(): void {}

  addTask(taksname: HTMLInputElement) {
    this.taskservice.addTasks({
      title: taksname.value,
    });
    taksname.value = '';
    taksname.focus();

    //console.log(this.taskservice.getTasks());
  }
}
