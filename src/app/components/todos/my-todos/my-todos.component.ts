import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Task } from 'src/app/interfaces/task.interface';
import { TaskService } from 'src/app/services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-my-todos',
  templateUrl: './my-todos.component.html',
  styleUrls: ['./my-todos.component.css']
})
export class MyTodosComponent implements OnInit{

  constructor(private ts: TaskService){}

  //fontawesome
  faTrash = faTrash;
  faCheck = faCheck;
  faXmark = faXmark;
  //-----------

  popup : boolean = true;

  getColorClass(content: string) {
    switch (content) {
      case 'High':
        return 'badge bg-danger'; // Bootstrap's red color
      case 'Medium':
        return 'badge bg-warning'; // Bootstrap's yellow color
      case 'Low':
        return 'badge bg-success'; // Bootstrap's green color
      default:
        return ''; // No specific class for other cases
    }
  }

  @ViewChild(AddTaskComponent) childComponent: AddTaskComponent;

  openModal(){
    this.childComponent.modal.nativeElement.style.display = 'block'
  }

  todos: Task[] = []

  ngOnInit(): void {
    this.ts.getAllTasks().subscribe((data) => {
      this.todos = data.map(element => {
        return{
          id: element.payload.doc.id,
          ...element.payload.doc.data() as object
        }
      })
    })
  }

  delete(index){
    this.ts.deleteTask(this.todos[index].id)    
  }

  isDoneChange(index){
    this.ts.isDoneChange(this.todos[index].id, !this.todos[index].isDone)
  }

}
