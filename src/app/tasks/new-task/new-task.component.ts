import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closeDialog = new EventEmitter<boolean>();
  // @Output() addTask = new EventEmitter<{title: string, summary: string, date: string}>();
  constructor(private tasksService: TasksService) {}
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  onClose() {
    this.closeDialog.emit(false);
  }
  onSubmit() {
    // this.addTask.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });

    this.tasksService.addNewTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId)
    this.closeDialog.emit(false);
  }
}
