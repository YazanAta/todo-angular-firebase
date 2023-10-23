import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private ts: TaskService, private fb: FormBuilder){}

  @ViewChild('modal') modal: ElementRef
  @Output() onModalClose = new EventEmitter<boolean>();

  closeModal(){
    this.modal.nativeElement.style.display = 'none'
    this.onModalClose.emit(false)
  }

  addTask(data){
    this.ts.addTask(data.value.title, data.value.priority, data.value.notes)
    .then( () => {
      this.addTaskForm.reset()
      this.closeModal();
    })
  }

  addTaskForm = this.fb.group({
    title: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(20)
    ])],
    priority: ['', Validators.required],
    notes: ['', Validators.maxLength(30)]
  })

}
