import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NgIf } from '@angular/common';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
    @Input({required: true}) userId: string | undefined;
    @Input({required: true}) name!: string;
    addbtnClicked?: boolean = false;
    private tasksService: TasksService;
    constructor(tasksService: TasksService) {
      this.tasksService = tasksService;
    }
    // another shortcut for this 
    // constructor(private tasksService: TasksService) {}

    get selectedUserTasks() {
      return this.tasksService.getUserTasks(this.userId!);
    }
    onCompleteTask(id: string) {
      this.tasksService.removeTask(id);
    }
    addnewTask() {
      this.addbtnClicked = true;
    }
    onCloseDialog(isClosed: boolean) {
      this.addbtnClicked = isClosed;
    }
    onAddTask(task: {title:string, summary: string, date: string}) {
      this.tasksService.addNewTask(task, this.userId!)
      this.addbtnClicked = false;
    }
}
