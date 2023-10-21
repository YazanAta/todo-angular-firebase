import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private fs: AngularFirestore, private as: AuthService) {}

  getAllTasks(){
    return this.fs.collection(`users/${this.as.userId}/todos`).snapshotChanges()
  }

  deleteTask(id){
    return this.fs.doc(`users/${this.as.userId}/todos/${id}`).delete()
  }

  isDoneChange(id, isDone){
    return this.fs.doc(`users/${this.as.userId}/todos/${id}`).update({
      isDone
    })
  }

  addTask(title: string, priority: string, notes: string){

    return new Promise<void>((resolve, reject) => {

      this.fs.collection(`users/${this.as.userId}/todos`).add({
        title : title,
        priority : priority,
        notes : notes,
        isDone : false,
      }).then( () => resolve())

    })
  }

}
