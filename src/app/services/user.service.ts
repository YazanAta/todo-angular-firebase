import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: AngularFirestore) { }

  addNewUser(id, name, email) {
    return this.fs.doc(`users/${id}`).set(
      {
        name: name ,
        email: email   //you can put => name and address by themself because the name of property is the same ass var
      }
    )
  }

  getUserData(){
    
  }

}
