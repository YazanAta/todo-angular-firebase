import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private ts: TaskService){}

  @ViewChild('modal') modal: ElementRef
  @Output() onModalClose = new EventEmitter<boolean>();

  closeModal(){
    this.modal.nativeElement.style.display = 'none'
    this.onModalClose.emit(false)
  }

  addTask(data: NgForm){
    this.ts.addTask(data.value.title, data.value.priority, data.value.notes)
    .then( () => {
      this.closeModal();
    })
  }
}
