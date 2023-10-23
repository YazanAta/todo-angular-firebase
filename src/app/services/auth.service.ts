import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { GoogleAuthProvider } from 'firebase/auth'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>
  userId: string
  
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user
  }

  signup(email, password){
    return this.afAuth.createUserWithEmailAndPassword(email, password)
  }

  login(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afAuth.signOut()
  }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
  }

  deleteAccount(){
    this.afAuth.currentUser.then(user => {
      user?.delete()
    })
  }

  recoverPassword(email: string): Observable<void>{
    return from(this.afAuth.sendPasswordResetEmail(email));
  }
}
